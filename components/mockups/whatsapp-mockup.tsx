import Image from "next/image";
import {
  Archive,
  Check,
  CircleDashed,
  MessageCircle,
  Mic,
  Package,
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
 * Two mockups, two points of view.
 *
 * `WhatsappMockup` is the phone: what the *buyer* sees, so their own messages
 * are the green ones. `WhatsappDesktopMockup` is WhatsApp Desktop as the
 * *business* sees it, so green is Nala replying and then a human taking over.
 * Showing both sides is the argument the about section is making.
 *
 * The two sides are written differently on purpose. Buyers type the way people
 * actually type on WhatsApp here: lowercase, "kak", "ga", short bursts, no
 * complete sentences. The business replies in clean sentences with capitals and
 * full prices, because that is how a decent Akun Bisnis answers and because the
 * whole claim of the page is that these replies are accurate.
 */

/* -------------------------------------------------------------------------- */
/* Phone — the buyer's view                                                    */
/* -------------------------------------------------------------------------- */

const SURFACE = "#EFEAE2"; // WhatsApp thread background
const HEADER = "#F0F2F5"; // WhatsApp light chrome
const OUTGOING = "#D9FDD3"; // Outgoing bubble
const BRAND_GREEN = "#00A884"; // Send action
const TICK = "#53BDEB"; // Read receipt

export function WhatsappMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-line bg-white shadow-panel",
        className,
      )}
      role="img"
      aria-label="Chat WhatsApp di HP pembeli dengan toko Kopi Rumpun. Pembeli menanyakan jam tutup outlet dan harga kopi susu gula aren, lalu mendapat jawaban berisi jam tutup, harga, tautan menu, dan tawaran untuk membuatkan pesanan."
    >
      {/* Chat header */}
      <div className="flex items-center gap-2.5 px-3.5 py-2.5" style={{ backgroundColor: HEADER }}>
        <Image
          src={avatar}
          alt=""
          aria-hidden="true"
          className="size-8 shrink-0 rounded-full object-cover"
          sizes="32px"
        />

        <span className="min-w-0 flex-1">
          <span className="block truncate text-[12px] font-semibold text-ink-900">Kopi Rumpun</span>
          <span className="block truncate text-[10px] text-ink-400">Akun Bisnis</span>
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
        <Outgoing time="22:41">halo kak masih buka ga?</Outgoing>

        <Incoming time="22:41">Halo kak! Outlet Kemang buka sampai jam 11 malam ini 😊</Incoming>

        <Outgoing time="22:42">kopi gula arennya harganya berapa ya kak?</Outgoing>

        <Incoming time="22:42">
          Harganya <span className="font-semibold tabular">Rp 28.000</span> kak.
          <span className="mt-2 flex w-fit items-center gap-1.5 rounded-sm bg-black/[0.05] px-2 py-1 text-[10px] font-medium text-ink-600">
            <Package className="size-3 text-brand-500" strokeWidth={1.75} />
            Kopi Susu Gula Aren · menu
          </span>
        </Incoming>

        <Incoming time="22:42">Mau saya buatkan pesanannya sekarang?</Incoming>
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

function Outgoing({ children, time }: { children: React.ReactNode; time: string }) {
  return (
    <div className="flex justify-end">
      <div
        className="max-w-[84%] rounded-md rounded-tr-sm px-2.5 py-1.5 text-[11.5px] leading-relaxed text-ink-900"
        style={{ backgroundColor: OUTGOING }}
      >
        {children}
        <span className="mt-0.5 flex items-center justify-end gap-1 text-[9px] text-ink-400 tabular">
          {time}
          <span className="relative inline-flex" style={{ color: TICK }}>
            <Check className="size-2.5" strokeWidth={3} />
            <Check className="-ml-1.5 size-2.5" strokeWidth={3} />
          </span>
        </span>
      </div>
    </div>
  );
}

function Incoming({ children, time }: { children: React.ReactNode; time: string }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[88%] rounded-md rounded-tl-sm bg-white px-2.5 py-1.5 text-[11.5px] leading-relaxed text-ink-900">
        {children}
        <span className="mt-0.5 block text-right text-[9px] text-ink-400 tabular">{time}</span>
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
  green: "#00A884",
  byline: "#0B7A5A",
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
];

export function WhatsappDesktopMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-lg border border-line shadow-panel", className)}
      style={{ backgroundColor: D.thread }}
      role="img"
      aria-label="WhatsApp Desktop pada akun bisnis skincare. Satu chat pelanggan sedang terbuka: pelanggan menanyakan apakah serumnya aman untuk kulit sensitif, Nala AI menjawab dari daftar produk, lalu saat pelanggan menanyakan refund chat-nya dioper ke anggota tim di chat yang sama."
    >
      {/*
       * The window buttons get their own strip rather than floating over the
       * panes: three 8px dots are wider than the 36px icon rail, so the last one
       * always landed across the rail/sidebar seam and read as a rendering bug.
       */}
      <div
        className="flex h-7 items-center gap-1.5 border-b px-3"
        style={{ backgroundColor: D.rail, borderColor: D.line }}
      >
        {["#FF5F57", "#FEBC2E", "#28C840"].map((colour) => (
          <span key={colour} className="size-2 rounded-full" style={{ backgroundColor: colour }} />
        ))}
      </div>

      <div className="flex h-[400px]">
        {/* Icon rail */}
        <div
          className="flex w-9 shrink-0 flex-col items-center gap-4 border-r pt-4 pb-3"
          style={{ backgroundColor: D.rail, borderColor: D.line }}
        >
          <span className="relative">
            <MessageCircle className="size-4" style={{ color: D.text }} strokeWidth={1.75} />
            <span
              className="absolute -top-1.5 -right-2 rounded-full px-1 text-[7px] font-bold text-white tabular"
              style={{ backgroundColor: D.green }}
            >
              9
            </span>
          </span>
          <Phone className="size-4" style={{ color: D.muted }} strokeWidth={1.75} />
          <CircleDashed className="size-4" style={{ color: D.muted }} strokeWidth={1.75} />
          <Archive className="size-4" style={{ color: D.muted }} strokeWidth={1.75} />
          <Star className="size-4" style={{ color: D.muted }} strokeWidth={1.75} />

          <span className="mt-auto flex flex-col items-center gap-3">
            <Settings className="size-4" style={{ color: D.muted }} strokeWidth={1.75} />
            <span
              className="flex size-5 items-center justify-center rounded-full text-[8px] font-semibold text-white"
              style={{ backgroundColor: "#B04A6E" }}
            >
              A
            </span>
          </span>
        </div>

        {/*
         * Chat list. Dropped below sm: rail plus list is 204px of fixed chrome,
         * which on a 390px phone left the thread itself under 140px and made
         * the one thing this mockup exists to show illegible.
         */}
        <div
          className="hidden w-[168px] shrink-0 flex-col border-r sm:flex"
          style={{ backgroundColor: D.sidebar, borderColor: D.line }}
        >
          <div className="px-3 pt-3.5 pb-2">
            <p className="text-[15px] font-bold" style={{ color: D.text }}>
              Chat
            </p>
            <div
              className="mt-2 flex items-center gap-1.5 rounded-md px-2 py-1.5"
              style={{ backgroundColor: D.field }}
            >
              <Search className="size-3" style={{ color: D.muted }} strokeWidth={2} />
              <span className="text-[9px]" style={{ color: D.muted }}>
                Cari
              </span>
            </div>
          </div>

          <ul className="min-h-0 flex-1 overflow-hidden">
            {CHATS.map((chat) => (
              <li
                key={chat.name}
                className="flex items-center gap-2 px-3 py-2"
                style={chat.active ? { backgroundColor: D.active } : undefined}
              >
                <span
                  className="flex size-7 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold text-white"
                  style={{ backgroundColor: chat.tint }}
                >
                  {chat.name.startsWith("+") ? (
                    <UserRound className="size-3.5" strokeWidth={2} />
                  ) : (
                    chat.name[0]
                  )}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[10px] font-medium" style={{ color: D.text }}>
                    {chat.name}
                  </span>
                  <span className="block truncate text-[9px]" style={{ color: D.muted }}>
                    {chat.preview}
                  </span>
                </span>

                <span className="flex shrink-0 flex-col items-end gap-1">
                  <span
                    className="text-[8px] tabular"
                    style={{ color: chat.unread ? D.green : D.muted }}
                  >
                    {chat.time}
                  </span>
                  {chat.unread ? (
                    <span
                      className="flex h-3 min-w-3 items-center justify-center rounded-full px-1 text-[7px] font-bold text-white tabular"
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
            className="flex items-center gap-2 border-b px-3 py-2.5"
            style={{ backgroundColor: D.sidebar, borderColor: D.line }}
          >
            <span
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold text-white"
              style={{ backgroundColor: "#7F5AF0" }}
            >
              R
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11px] font-medium" style={{ color: D.text }}>
                Rani Puspita
              </span>
              <span className="block text-[8.5px]" style={{ color: D.green }}>
                online
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-3" style={{ color: D.muted }}>
              <Video className="size-3.5" strokeWidth={1.75} />
              <Phone className="size-3" strokeWidth={1.75} />
            </span>
          </div>

          <div
            className="relative min-h-0 flex-1 overflow-hidden"
            style={{ backgroundColor: D.thread }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: "url(/whatsapp-bg.webp)", backgroundSize: "340px auto" }}
            />

            <div className="relative flex h-full flex-col justify-end space-y-1.5 px-3 py-3">
              <DesktopIn time="09.12">kak serum ini aman ga buat kulit sensitif?</DesktopIn>

              <DesktopOut time="09.12" byline="Nala AI">
                aman kok kak 😊 formulanya bebas alkohol sama pewangi, udah lulus patch test
                <span
                  className="mt-1.5 flex w-fit items-center gap-1.5 rounded-sm px-1.5 py-1 text-[8.5px] font-medium"
                  style={{ backgroundColor: "rgba(0,0,0,0.05)", color: D.text }}
                >
                  <Package className="size-2.5" strokeWidth={2} />
                  Calming Serum · daftar bahan
                </span>
              </DesktopOut>

              <DesktopIn time="09.13">kalo nanti ada reaksi bisa refund ga?</DesktopIn>

              {/* The handover, drawn as an in-thread system note because that is
                  exactly how it appears to the buyer: no new chat, no new number. */}
              <div className="flex justify-center py-0.5">
                <span
                  className="rounded-sm px-2 py-1 text-[8px] font-medium"
                  style={{ backgroundColor: "rgba(0,0,0,0.06)", color: D.muted }}
                >
                  Dialihkan ke Dewi · tim Ayuwangi
                </span>
              </div>

              <DesktopOut time="09.14" byline="Dewi">
                halo kak, aku dewi dari ayuwangi ya
              </DesktopOut>

              <DesktopOut time="09.14">
                kalau ada reaksi di kulit bisa kita ganti atau refund penuh kok. mau aku bantu
                prosesnya sekarang?
              </DesktopOut>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: D.sidebar }}>
            <Plus className="size-4 shrink-0" style={{ color: D.muted }} strokeWidth={2} />
            <span
              className="flex-1 rounded-full px-3 py-1.5 text-[9.5px]"
              style={{ backgroundColor: D.field, color: D.muted }}
            >
              Ketik pesan
            </span>
            <Smile className="size-3.5 shrink-0" style={{ color: D.muted }} strokeWidth={1.75} />
            <Mic className="size-3.5 shrink-0" style={{ color: D.muted }} strokeWidth={1.75} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopIn({ children, time }: { children: React.ReactNode; time: string }) {
  return (
    <div className="flex justify-start">
      <div
        className="max-w-[76%] rounded-md rounded-tl-sm px-2 py-1.5 text-[10px] leading-relaxed"
        style={{ backgroundColor: D.in, color: D.text }}
      >
        {children}
        <span className="mt-0.5 block text-right text-[7.5px] tabular" style={{ color: D.muted }}>
          {time}
        </span>
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
      <div
        className="max-w-[76%] rounded-md rounded-tr-sm px-2 py-1.5 text-[10px] leading-relaxed"
        style={{ backgroundColor: D.out, color: D.text }}
      >
        {/* Who is speaking is the whole point here, so the sender is named the
            way WhatsApp names a participant in a group thread. */}
        {byline ? (
          <span className="mb-0.5 block text-[8.5px] font-semibold" style={{ color: D.byline }}>
            {byline}
          </span>
        ) : null}
        {children}
        <span
          className="mt-0.5 flex items-center justify-end gap-1 text-[7.5px] tabular"
          style={{ color: D.muted }}
        >
          {time}
          <span className="relative inline-flex" style={{ color: TICK }}>
            <Check className="size-2" strokeWidth={3} />
            <Check className="-ml-1 size-2" strokeWidth={3} />
          </span>
        </span>
      </div>
    </div>
  );
}
