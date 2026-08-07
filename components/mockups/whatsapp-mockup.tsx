import Image from "next/image";
import {
  Archive,
  Check,
  CircleDashed,
  MessageCircle,
  Mic,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  Send,
  Settings,
  Smile,
  Star,
  UserRound,
  Video,
} from "lucide-react";

import avatar from "@/public/whatsapp-avatar.jpg";
import { cn } from "@/lib/utils";

/**
 * Two mockups, one point of view: the *business* side of the conversation, on a
 * phone and on the desktop app. Green is always Nala replying, white is always
 * the buyer asking, and every green bubble is signed so it is never ambiguous
 * which of the two is the product. The two used to disagree — the phone was
 * drawn from the buyer's seat, so its green bubbles were the buyer's — and a
 * reader moving from the hero to the about section had to re-learn the colours.
 *
 * The two sides are written differently on purpose. Buyers type the way people
 * actually type on WhatsApp here: lowercase, "kak", "ga", short bursts, no
 * complete sentences. Nala replies in clean sentences with capitals and full
 * prices, because that is how a decent Akun Bisnis answers and because the whole
 * claim of the page is that these replies are accurate.
 */

/* -------------------------------------------------------------------------- */
/* Phone — the buyer's view                                                    */
/* -------------------------------------------------------------------------- */

const SURFACE = "#EFEAE2"; // WhatsApp thread background
const HEADER = "#F0F2F5"; // WhatsApp light chrome
const OUTGOING = "#D9FDD3"; // Outgoing bubble
const BRAND_GREEN = "#00A884"; // Send action
const TICK = "#53BDEB"; // Read receipt
const BYLINE = "#0B7A5A"; // Sender name inside an outgoing bubble

export function WhatsappMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-line bg-white shadow-panel",
        className,
      )}
      role="img"
      aria-label="Chat WhatsApp di akun bisnis Kopi Rumpun. Pembeli menanyakan jam tutup outlet dan harga kopi susu gula aren, lalu Nala AI menjawab dengan jam tutup, harga, dan tawaran untuk membuatkan pesanan."
    >
      {/* Chat header. The buyer is named here, not the shop: this is the shop's
          own inbox, so the person on the other end is who the thread is with. */}
      <div className="flex items-center gap-2.5 px-3.5 py-2.5" style={{ backgroundColor: HEADER }}>
        <Image
          src={avatar}
          alt=""
          aria-hidden="true"
          className="size-8 shrink-0 rounded-full object-cover"
          sizes="32px"
        />

        <span className="min-w-0 flex-1">
          <span className="block truncate text-[12px] font-semibold text-ink-900">Andri Wijaya</span>
          <span className="block truncate text-[10px]" style={{ color: BRAND_GREEN }}>
            online
          </span>
        </span>

        <span className="flex shrink-0 items-center gap-3.5 text-ink-600">
          <Video className="size-4" strokeWidth={1.75} />
          <Phone className="size-3.5" strokeWidth={1.75} />
        </span>
      </div>

      {/* Thread — wallpaper sized to its native ~368px phone width so the
          doodles read at the scale they would on a real device. */}
      <div
        className="space-y-2 px-3 py-3.5"
        style={{
          backgroundColor: SURFACE,
          backgroundImage: "url(/whatsapp-bg.webp)",
          backgroundSize: "368px auto",
          backgroundPosition: "center top",
          backgroundRepeat: "repeat",
        }}
      >
        <Incoming time="22:41">halo kak masih buka ga?</Incoming>

        <Outgoing time="22:41" byline="Nala AI">
          Halo kak! Outlet Kemang buka sampai jam 11 malam ini 😊
        </Outgoing>

        <Incoming time="22:42">kopi gula arennya harganya berapa ya kak?</Incoming>

        <Outgoing time="22:42" byline="Nala AI">
          Harganya <span className="font-semibold tabular">Rp 28.000</span> kak.
        </Outgoing>

        <Outgoing time="22:42" byline="Nala AI">
          Mau saya buatkan pesanannya sekarang?
        </Outgoing>
      </div>

      {/* Composer */}
      <div className="flex items-center gap-2 px-3 py-2.5" style={{ backgroundColor: HEADER }}>
        <span className="flex-1 truncate rounded-full bg-white px-3 py-2 text-[11px] text-ink-400">
          Ketik pesan
        </span>
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: BRAND_GREEN }}
        >
          <Send className="size-3.5 text-white" strokeWidth={2} />
        </span>
      </div>
    </div>
  );
}

/**
 * The timestamp is not a line under the message. WhatsApp sets it *inline* at
 * the end of the last line and only lets it drop to a line of its own when that
 * line has no room left — which is why a two-word message is a single short row
 * with the time beside it, not a two-row block.
 *
 * Reproduced the way the app itself does it: a zero-height copy of the meta is
 * left in the text flow to reserve exactly its own width on the last line, and
 * the real one is positioned over that reserved space. Rendering the same node
 * twice is what keeps the reservation exact — a hand-measured spacer width goes
 * wrong the moment the type scale, the locale's time format, or the tick glyph
 * changes, and the failure is text sliding under the timestamp.
 *
 * `overflow-hidden` rather than `invisible` on the in-flow copy: it has to take
 * up width without taking up height, or every bubble grows by a meta line.
 *
 * The one case that puts the time on a row of its own is a bubble pinned at its
 * max width: the bubble cannot grow to take the reservation, so the reservation
 * wraps. That is why the caps below are set wide enough to swallow a timestamp
 * rather than at the tightest value that looked right — a cap a few pixels too
 * tight does not shave a few pixels off a bubble, it drops the time onto its own
 * row and adds a whole one.
 *
 * Do not try to fix that case by forbidding the break with U+2060 or a nbsp:
 * Chrome breaks before an atomic inline regardless (verified directly, with and
 * without React's comment separators between the text and the spacer).
 */
function Meta({
  time,
  ticks,
  tickSize = "size-2.5",
  className,
  style,
}: {
  time: string;
  ticks?: boolean;
  tickSize?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const body = (
    <>
      {time}
      {ticks ? (
        <span className="relative inline-flex" style={{ color: TICK }}>
          <Check className={tickSize} strokeWidth={3} />
          <Check className={cn("-ml-1.5", tickSize)} strokeWidth={3} />
        </span>
      ) : null}
    </>
  );

  return (
    <>
      <span
        aria-hidden="true"
        className={cn("ml-1.5 inline-flex h-0 items-center gap-1 overflow-hidden", className)}
        style={style}
      >
        {body}
      </span>
      <span className={cn("absolute flex items-center gap-1", className)} style={style}>
        {body}
      </span>
    </>
  );
}

function Outgoing({
  children,
  time,
  byline,
}: {
  children: React.ReactNode;
  time: string;
  byline?: string;
}) {
  return (
    <div className="flex justify-end">
      {/* WhatsApp's own bubble metrics, scaled to this 320px phone: 7px side
          padding, a 7px radius squared off at the tail corner, and a line height
          near 1.35. `leading-relaxed` was the giveaway that these were web
          bubbles rather than chat bubbles — real threads set tight. */}
      <div
        className="relative max-w-[84%] rounded-[12px] rounded-tr-[3px] px-[7px] pt-[5px] pb-[6px] text-[12px] leading-[1.35] text-ink-900"
        style={{ backgroundColor: OUTGOING }}
      >
        {/* Signed the same way the desktop mockup signs it, so the reader learns
            one rule for both: a green bubble with a name on it is Nala. */}
        {byline ? (
          <span className="block text-[10px] font-semibold" style={{ color: BYLINE }}>
            {byline}
          </span>
        ) : null}
        {children}
        <Meta
          time={time}
          ticks
          className="right-[7px] bottom-[5px] text-[9.5px] text-ink-400 tabular"
        />
      </div>
    </div>
  );
}

function Incoming({ children, time }: { children: React.ReactNode; time: string }) {
  return (
    <div className="flex justify-start">
      <div className="relative max-w-[84%] rounded-[12px] rounded-tl-[3px] bg-white px-[7px] pt-[5px] pb-[6px] text-[12px] leading-[1.35] text-ink-900">
        {children}
        <Meta time={time} className="right-[7px] bottom-[5px] text-[9.5px] text-ink-400 tabular" />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Desktop — the business's view                                               */
/* -------------------------------------------------------------------------- */

/**
 * WhatsApp's *light* theme, matching the phone mockup and the rest of the page.
 * The dark chrome dropped a 550px block of near-black into a white section and
 * fought everything around it.
 */
const D = {
  rail: "#F0F2F5",
  sidebar: "#FFFFFF",
  active: "#F0F2F5",
  field: "#F0F2F5",
  line: "#E9EDEF",
  thread: SURFACE,
  out: OUTGOING,
  in: "#FFFFFF",
  text: "#111B21",
  muted: "#667781",
  green: BRAND_GREEN,
  byline: BYLINE,
};

/** Tinted avatars, so seven rows do not read as one grey column. */
const CHATS = [
  {
    name: "Rani Puspita",
    preview: "kalo nanti ada reaksi bisa refund ga?",
    time: "09.13",
    tint: "#7F5AF0",
    active: true,
  },
  {
    name: "Dimas Ardiansyah",
    preview: "udah aku transfer ya kak",
    time: "09.04",
    tint: "#2A9D8F",
    unread: 2,
  },
  {
    name: "Nabila Zahra",
    preview: "ongkir ke bandung berapa kak?",
    time: "08.51",
    tint: "#E76F51",
    unread: 1,
  },
  { name: "Pak Yusuf", preview: "restock calming serum kapan ya", time: "08.33", tint: "#457B9D" },
  {
    name: "Reseller Jabar",
    preview: "~Tia: oke siap kak",
    time: "Kemarin",
    tint: "#B5838D",
    unread: 5,
  },
  { name: "+62 812-8899-1204", preview: "makasih kak 🙏", time: "Kemarin", tint: "#6D8B74" },
  { name: "Sinta Maharani", preview: "paketnya udah sampe!", time: "Kemarin", tint: "#C77DFF" },
  // Deliberately more chats than fit. The list is clipped by the panel edge, so
  // it has to overrun the tallest version of the panel — otherwise the column
  // runs out of rows and ends in a blank foot. Being cut mid-row at the bottom
  // is what a real, scrollable chat list looks like anyway.
  { name: "Agung Prasetyo", preview: "bisa kirim hari ini ga?", time: "Kemarin", tint: "#4A6FA5" },
  { name: "Melati Cahyani", preview: "yang travel size ready?", time: "Senin", tint: "#B08968" },
  { name: "Grup Reseller Bandung", preview: "~Rina: noted kak", time: "Senin", tint: "#7A9E7E" },
  { name: "Farhan Maulana", preview: "ada promo bundling ga kak?", time: "Senin", tint: "#5A7D9A" },
  { name: "Ibu Wulan", preview: "ini bukti transfernya ya kak", time: "Senin", tint: "#A4664A" },
  { name: "Kirana Dewi", preview: "cocok ga buat kulit kering?", time: "Senin", tint: "#8E7CC3" },
  { name: "+62 857-3320-8815", preview: "kak mau order lagi dong", time: "Minggu", tint: "#5F9EA0" },
  { name: "Rizka Amelia", preview: "sunscreennya lengket ga ya", time: "Minggu", tint: "#C08552" },
  { name: "Toko Ayu Bandung", preview: "~Bayu: siap kak besok kirim", time: "Minggu", tint: "#9A6F9E" },
];

export function WhatsappDesktopMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        // flex column so the panel fills whatever height its container gives it;
        // the caller sets that, which is what keeps this and the dashboard card
        // the same size where they sit on the same page.
        //
        // Square, not rounded: this one runs full-bleed in its box, edge to edge
        // on all four sides like a cropped product screenshot, not a floating card.
        //
        // `@container`, not viewport breakpoints, for everything inside: the panel
        // is now full-bleed to the frame, so its width is what should decide how
        // big the chrome is drawn, not the window's.
        "@container relative flex h-[530px] flex-col overflow-hidden sm:h-[600px] lg:h-[700px]",
        className,
      )}
      style={{ backgroundColor: D.thread }}
      role="img"
      aria-label="WhatsApp Desktop pada akun bisnis skincare. Satu chat pelanggan sedang terbuka: pelanggan menanyakan harga Calming Serum 30ml lalu apakah serumnya aman untuk kulit sensitif, Nala AI menjawab keduanya dari katalog dan daftar produk, lalu saat pelanggan menanyakan refund chat-nya dioper ke anggota tim di chat yang sama."
    >
      {/* No window chrome: the panel is full-bleed to the frame, so there is no
          window for a title bar to belong to — a strip of traffic lights on an
          edge-to-edge plate reads as a decal stuck on the page. This is the app
          filling the screen, which is how the reference looks too. */}
      <div className="flex min-h-0 flex-1">
        {/* Icon rail. The hairline between Status and Archive is the grouping
            WhatsApp Desktop actually draws — navigation above, saved things
            below — and it is what stops five icons reading as one stack. */}
        <div
          className="flex w-10 shrink-0 flex-col items-center gap-5 border-r pt-4 pb-4 @3xl:w-[60px] @3xl:gap-6 @3xl:pt-5"
          style={{ backgroundColor: D.rail, borderColor: D.line }}
        >
          <span className="relative">
            <MessageCircle className="size-5" style={{ color: D.text }} strokeWidth={1.75} />
            <span
              className="absolute -top-2 -right-2.5 rounded-full px-1 text-[8px] font-bold text-white tabular"
              style={{ backgroundColor: D.green }}
            >
              9
            </span>
          </span>
          <Phone className="size-5" style={{ color: D.muted }} strokeWidth={1.75} />
          <CircleDashed className="size-5" style={{ color: D.muted }} strokeWidth={1.75} />

          <span className="h-px w-5" style={{ backgroundColor: "rgba(17,27,33,0.10)" }} />

          <Archive className="size-5" style={{ color: D.muted }} strokeWidth={1.75} />
          <Star className="size-5" style={{ color: D.muted }} strokeWidth={1.75} />

          <span className="mt-auto flex flex-col items-center gap-4">
            <Settings className="size-5" style={{ color: D.muted }} strokeWidth={1.75} />
            <span
              className="flex size-7 items-center justify-center rounded-full text-[10px] font-semibold text-white"
              style={{ backgroundColor: "#B04A6E" }}
            >
              A
            </span>
          </span>
        </div>

        {/*
         * Chat list. Sized as a share of the panel with a floor and a ceiling
         * rather than at fixed widths, which is what WhatsApp Desktop itself
         * does — the list holds roughly a quarter of the window at every size.
         * A fixed 168px was a quarter of nothing once the panel went full-bleed,
         * and the rows were squeezed into a column too narrow to read.
         *
         * Dropped below sm entirely: rail plus list is fixed chrome, and on a
         * 390px phone it left the thread — the one thing this mockup exists to
         * show — under 140px wide.
         *
         * Its own `@container`, so the rows are sized off the column they sit in
         * rather than off the whole panel: on a tablet-width panel the column is
         * only ~210px, and desktop-sized rows in it truncated every name to two
         * words and an ellipsis.
         */}
        <div
          className="@container hidden w-[26%] max-w-[352px] min-w-[190px] shrink-0 flex-col border-r sm:flex"
          style={{ backgroundColor: D.sidebar, borderColor: D.line }}
        >
          <div className="px-4 pt-4 pb-2 @2xs:pt-5">
            <p className="text-[16px] font-bold @2xs:text-[19px]" style={{ color: D.text }}>
              Chat
            </p>
            <div
              className="mt-3 flex items-center gap-2.5 rounded-lg px-3 py-2"
              style={{ backgroundColor: D.field }}
            >
              <Search className="size-3.5 shrink-0" style={{ color: D.muted }} strokeWidth={2} />
              <span className="text-[11px] @2xs:text-[12.5px]" style={{ color: D.muted }}>
                Cari
              </span>
            </div>
          </div>

          {/* Rows are inset and rounded, so the selected chat reads as a pill
              inside the column rather than as a full-width band across it. */}
          <ul className="min-h-0 flex-1 overflow-hidden px-2 pt-1">
            {CHATS.map((chat) => (
              <li
                key={chat.name}
                className="flex items-center gap-3 rounded-lg px-2 py-2.5"
                style={chat.active ? { backgroundColor: D.active } : undefined}
              >
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white @2xs:size-11 @2xs:text-[14px]"
                  style={{ backgroundColor: chat.tint }}
                >
                  {chat.name.startsWith("+") ? (
                    <UserRound className="size-4.5" strokeWidth={2} />
                  ) : (
                    chat.name[0]
                  )}
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className="block truncate text-[12px] font-medium @2xs:text-[13.5px]"
                    style={{ color: D.text }}
                  >
                    {chat.name}
                  </span>
                  <span
                    className="mt-0.5 block truncate text-[11px] @2xs:text-[12.5px]"
                    style={{ color: D.muted }}
                  >
                    {chat.preview}
                  </span>
                </span>

                <span className="flex shrink-0 flex-col items-end gap-1.5">
                  <span
                    className="text-[10px] tabular @2xs:text-[11px]"
                    style={{ color: chat.unread ? D.green : D.muted }}
                  >
                    {chat.time}
                  </span>
                  {chat.unread ? (
                    <span
                      className="flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] font-bold text-white tabular"
                      style={{ backgroundColor: D.green }}
                    >
                      {chat.unread}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Thread */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div
            className="flex items-center gap-3 border-b px-4 py-3"
            style={{ backgroundColor: D.sidebar, borderColor: D.line }}
          >
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white @3xl:size-10 @3xl:text-[13px]"
              style={{ backgroundColor: "#7F5AF0" }}
            >
              R
            </span>
            <span className="min-w-0 flex-1">
              <span
                className="block truncate text-[13px] font-medium @3xl:text-[14.5px]"
                style={{ color: D.text }}
              >
                Rani Puspita
              </span>
              <span className="block text-[10.5px]" style={{ color: D.green }}>
                online
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-4" style={{ color: D.muted }}>
              <Video className="size-4.5" strokeWidth={1.75} />
              <Phone className="size-4" strokeWidth={1.75} />
              <MoreHorizontal className="size-4.5" strokeWidth={1.75} />
            </span>
          </div>

          <div
            className="relative min-h-0 flex-1 overflow-hidden"
            style={{ backgroundColor: D.thread }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: "url(/whatsapp-bg.webp)", backgroundSize: "420px auto" }}
            />

            <div className="relative flex h-full flex-col justify-end space-y-2 px-4 py-3.5">
              {/* Scrollback. The thread is bottom-anchored, so without earlier
                  turns the taller panel opened a blank field above the first
                  message. These also do useful work: they show Nala answering a
                  plain price question before the harder one arrives. */}
              <div className="flex justify-center py-0.5">
                <span
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium"
                  style={{ backgroundColor: "rgba(0,0,0,0.06)", color: D.muted }}
                >
                  Hari ini
                </span>
              </div>

              <DesktopIn time="09.10">halo kak, mau tanya dong</DesktopIn>

              <DesktopOut time="09.10" byline="Nala AI">
                Halo kak! Boleh, mau tanya yang mana? 😊
              </DesktopOut>

              <DesktopIn time="09.11">calming serum yang 30ml berapa ya?</DesktopIn>

              <DesktopOut time="09.11" byline="Nala AI">
                Calming Serum 30ml harganya <span className="font-semibold tabular">Rp 189.000</span>{" "}
                kak, stoknya lagi ready.
              </DesktopOut>

              <DesktopIn time="09.12">kak serum ini aman ga buat kulit sensitif?</DesktopIn>

              <DesktopOut time="09.12" byline="Nala AI">
                Aman kok kak 😊 Formulanya bebas alkohol dan pewangi, dan sudah lulus patch test.
              </DesktopOut>

              <DesktopIn time="09.13">kalo nanti ada reaksi bisa refund ga?</DesktopIn>

              {/* The handover, drawn as an in-thread system note because that is
                  exactly how it appears to the buyer: no new chat, no new number. */}
              <div className="flex justify-center py-0.5">
                <span
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium"
                  style={{ backgroundColor: "rgba(0,0,0,0.06)", color: D.muted }}
                >
                  Dialihkan ke Dewi · tim Ayuwangi
                </span>
              </div>

              <DesktopOut time="09.14" byline="Dewi">
                Halo kak, saya Dewi dari Ayuwangi ya.
              </DesktopOut>

              <DesktopOut time="09.14">
                Kalau ada reaksi di kulit, bisa kami ganti atau refund penuh kok. Mau saya bantu
                prosesnya sekarang?
              </DesktopOut>
            </div>
          </div>

          <div
            className="flex items-center gap-3 px-4 py-2.5"
            style={{ backgroundColor: D.sidebar }}
          >
            <Plus className="size-5 shrink-0" style={{ color: D.muted }} strokeWidth={2} />
            <span
              className="flex-1 rounded-full px-4 py-2 text-[12px] @3xl:text-[13px]"
              style={{ backgroundColor: D.field, color: D.muted }}
            >
              Ketik pesan
            </span>
            <Smile className="size-4.5 shrink-0" style={{ color: D.muted }} strokeWidth={1.75} />
            <Mic className="size-4.5 shrink-0" style={{ color: D.muted }} strokeWidth={1.75} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Bubble metrics straight off WhatsApp Desktop — 9px/7px padding, 7.5px radius
 * squared at the tail, ~1.35 line height, and a timestamp at roughly 0.78× the
 * message text. The body size is stated per container width because this panel
 * is drawn anywhere from a 390px phone to the full 1600px frame; 14.2px at the
 * wide end is the size the real app sets.
 */
const BUBBLE =
  "relative rounded-[14px] px-[9px] pt-[6px] pb-[7px] text-[12.5px] leading-[1.35] max-w-[72%] @3xl:text-[14.2px]";
const BUBBLE_META = "right-[9px] bottom-[6px] text-[10px] tabular @3xl:text-[11px]";

function DesktopIn({ children, time }: { children: React.ReactNode; time: string }) {
  return (
    <div className="flex justify-start">
      <div className={cn(BUBBLE, "rounded-tl-[3px]")} style={{ backgroundColor: D.in, color: D.text }}>
        {children}
        <Meta time={time} className={BUBBLE_META} style={{ color: D.muted }} />
      </div>
    </div>
  );
}

function DesktopOut({
  children,
  time,
  byline,
}: {
  children: React.ReactNode;
  time: string;
  byline?: string;
}) {
  return (
    <div className="flex justify-end">
      <div className={cn(BUBBLE, "rounded-tr-[3px]")} style={{ backgroundColor: D.out, color: D.text }}>
        {/* Who is speaking is the whole point here, so the sender is named the
            way WhatsApp names a participant in a group thread. */}
        {byline ? (
          <span className="block text-[11px] font-semibold @3xl:text-[12.5px]" style={{ color: D.byline }}>
            {byline}
          </span>
        ) : null}
        {children}
        <Meta
          time={time}
          ticks
          tickSize="size-3"
          className={BUBBLE_META}
          style={{ color: D.muted }}
        />
      </div>
    </div>
  );
}
