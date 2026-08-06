import {
  Bell,
  BookOpen,
  CircleUserRound,
  LayoutGrid,
  MessagesSquare,
  Route,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { BarChart, LineChart, Meter } from "@/components/mockups/charts";
import { StatTile } from "@/components/mockups/stat-tile";
import { NalaLogo } from "@/components/site/logo";
import { cn } from "@/lib/utils";

/**
 * DESIGN_SYSTEM §5.5 — the product mockup card. Built from real DOM and inline
 * SVG rather than a screenshot so it stays crisp and themable, and carries
 * realistic operating data, never lorem ipsum.
 *
 * Laid out with container queries, not viewport ones. It renders at ~800px in
 * the hero and ~570px in the dashboard section, and `lg:` asks about the window
 * — so on a desktop screen the narrow copy was still laying four stat tiles
 * across 90px each and pushing the trend badges out through the card edge.
 */

const RAIL = [
  { icon: LayoutGrid, label: "Ringkasan", active: true },
  { icon: MessagesSquare, label: "Chat" },
  { icon: BookOpen, label: "Katalog" },
  { icon: Route, label: "Aturan" },
  { icon: TrendingUp, label: "Laporan" },
  { icon: Settings, label: "Pengaturan" },
];

/**
 * Real questions from a WhatsApp storefront, not enterprise support tickets —
 * the queue is the part of this mockup a buyer reads closely, and generic SaaS
 * rows would give away that nobody uses this on a WhatsApp number.
 */
const QUEUE = [
  { name: "Ongkir ke Bandung berapa?", channel: "Nala", status: "Dijawab" },
  { name: "Kalau ada reaksi bisa refund?", channel: "Dewi", status: "Dialihkan" },
  { name: "Calming serum restock kapan?", channel: "Nala", status: "Dijawab" },
  { name: "Bisa COD ga kak?", channel: "Nala", status: "Dijawab" },
  { name: "Serum buat kulit berminyak yang mana?", channel: "Nala", status: "Dijawab" },
  { name: "Mau ambil 20 pcs, ada harga grosir?", channel: "Rio", status: "Dialihkan" },
];

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        // No height of its own: the hero sizes it by content, the dashboard
        // section hands it an explicit one to match the thread beside it. The
        // flex column is what lets it fill that height when it is given.
        "@container flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-panel",
        className,
      )}
      role="img"
      aria-label="Dashboard Nala AI: 2.184 chat ditangani bulan ini, 87% terjawab otomatis, rata-rata balasan 1,2 detik dan 342 orderan, beserta antrean chat WhatsApp yang sedang masuk."
    >
      {/* Top bar */}
      <div className="flex h-12 shrink-0 items-center gap-3 border-b border-line px-3 @md:px-4">
        {/* The artwork, not the word set in our display face: the logo is a
            lowercase geometric lockup and "Nala" typed in Poppins semibold was
            visibly not the same thing sitting two inches from the real one. */}
        <NalaLogo markClassName="size-5" wordmarkClassName="h-3.5" />

        <div className="ml-2 hidden h-7 max-w-[220px] flex-1 items-center gap-2 rounded-sm border border-line bg-surface-50 px-2.5 @md:flex">
          <Search className="size-3.5 text-ink-400" strokeWidth={1.75} />
          <span className="text-[11px] text-ink-400">Cari chat</span>
        </div>

        <div className="ml-auto flex items-center gap-2.5">
          <Bell className="size-4 text-ink-400" strokeWidth={1.75} />
          <div className="flex items-center gap-1.5 rounded-sm border border-line py-1 pr-2 pl-1">
            <CircleUserRound className="size-4 text-ink-400" strokeWidth={1.75} />
            <span className="hidden text-[11px] font-medium text-ink-600 @md:inline">
              Ayuwangi
            </span>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Icon-nav rail — one item highlighted in light blue as active. */}
        <nav className="hidden w-[148px] shrink-0 flex-col gap-0.5 border-r border-line p-2.5 @lg:flex">
          {RAIL.map(({ icon: Icon, label, active }) => (
            <span
              key={label}
              className={cn(
                "flex items-center gap-2 rounded-sm px-2 py-1.5 text-[11px] font-medium",
                active ? "bg-brand-300/14 text-brand-600" : "text-ink-400",
              )}
            >
              <Icon className="size-3.5" strokeWidth={1.75} />
              {label}
            </span>
          ))}

          <span className="mt-auto flex items-center gap-2 rounded-sm bg-surface-50 px-2 py-2 text-[10px] leading-tight font-medium text-ink-600">
            <Sparkles className="size-3.5 shrink-0 text-brand-500" strokeWidth={1.75} />
            Katalog diperbarui 4 menit lalu
          </span>
        </nav>

        {/* Main area */}
        <div className="flex min-w-0 flex-1 flex-col bg-surface-50/60 p-3 @md:p-4">
          <div className="grid shrink-0 grid-cols-2 gap-2.5 @3xl:grid-cols-4">
            <StatTile label="Chat" value="2.184" delta="18%">
              <BarChart values={[38, 44, 41, 56, 52, 63, 71]} />
            </StatTile>
            <StatTile label="Terjawab" value="87%" delta="6%">
              <Meter value={87} className="mb-1.5" />
            </StatTile>
            <StatTile label="Rata-rata balas" value="1,2d">
              <LineChart values={[9, 7, 8, 5, 4, 3, 2]} />
            </StatTile>
            <StatTile label="Orderan" value="342" delta="24%">
              <BarChart values={[22, 26, 31, 29, 38, 44, 51]} />
            </StatTile>
          </div>

          <div className="mt-2.5 grid min-h-0 flex-1 gap-2.5 @3xl:grid-cols-5">
            {/* Volume chart card */}
            <div className="flex min-h-0 flex-col rounded-md border border-line bg-white p-3.5 @3xl:col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-medium text-ink-400">Volume chat</p>
                  <p className="mt-1 font-display text-lg leading-none font-semibold text-ink-900 tabular">
                    2.184
                  </p>
                </div>
                <span className="rounded-sm bg-surface-50 px-1.5 py-0.5 text-[10px] font-medium text-ink-600">
                  30 hari
                </span>
              </div>
              {/* Takes the card's spare height rather than a fixed 56px: given
                  a tall card, a short trend line leaves a blank field under it
                  and reads as a rule rather than as data. */}
              <LineChart
                values={[18, 24, 21, 33, 29, 41, 38, 52, 47, 61, 58, 72]}
                className="mt-4 min-h-14 flex-1"
              />
              <div className="mt-2 flex shrink-0 justify-between text-[9px] text-ink-400 tabular">
                <span>Minggu 1</span>
                <span>Minggu 2</span>
                <span>Minggu 3</span>
                <span>Minggu 4</span>
              </div>
            </div>

            {/* Live queue card */}
            <div className="flex min-h-0 flex-col overflow-hidden rounded-md border border-line bg-white p-3.5 @3xl:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium text-ink-400">Chat terbaru</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-success">
                  <span className="size-1.5 rounded-full bg-success" />
                  Realtime
                </span>
              </div>

              <ul className="mt-2.5 divide-y divide-line">
                {QUEUE.map((item) => (
                  <li key={item.name} className="flex items-center gap-2 py-1.5">
                    <span className="min-w-0 flex-1 truncate text-[11px] text-ink-900">
                      {item.name}
                    </span>
                    <span className="hidden text-[10px] text-ink-400 @md:inline">
                      {item.channel}
                    </span>
                    <span
                      className={cn(
                        "rounded-sm px-1.5 py-0.5 text-[10px] font-medium",
                        item.status === "Dijawab"
                          ? "bg-success/10 text-success"
                          : "bg-brand-300/14 text-brand-600",
                      )}
                    >
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
