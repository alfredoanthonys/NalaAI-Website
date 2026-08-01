import {
  ArrowRight,
  BookOpen,
  Check,
  CircleUserRound,
  FileText,
  Globe,
  Headset,
  LifeBuoy,
  TicketCheck,
} from "lucide-react";

import { LineChart, Meter } from "@/components/mockups/charts";
import { cn } from "@/lib/utils";

/**
 * Small product mockups that sit at the top of each feature card and beside
 * each "how it works" row (DESIGN_SYSTEM §5.5). Realistic data throughout.
 */

/** Resolution split — what closed on its own vs. what reached a person. */
export function ResolutionVisual({ className }: { className?: string }) {
  const rows = [
    { label: "Dijawab Nala", value: 87, tone: "brand" as const },
    { label: "Dijawab di luar jam kerja", value: 61, tone: "brand" as const },
    { label: "Dioper ke tim", value: 13, tone: "muted" as const },
  ];

  return (
    <div
      className={cn("rounded-md border border-line bg-white p-4", className)}
      role="img"
      aria-label="Rincian penyelesaian chat: 87 persen dijawab otomatis dan 13 persen dioper ke tim, dengan rata-rata pengoperan 40 detik."
    >
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] font-medium text-ink-400">Minggu ini</span>
        <span className="text-[10px] font-medium text-ink-400 tabular">1.462 chat</span>
      </div>

      <div className="mt-3 space-y-3">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] text-ink-900">{row.label}</span>
              <span className="font-display text-[13px] font-semibold text-ink-900 tabular">
                {row.value}%
              </span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-sm bg-brand-500/10">
              <div
                className={cn(
                  "h-full rounded-sm",
                  row.tone === "brand" ? "bg-brand-500" : "bg-ink-400/50",
                )}
                style={{ width: `${row.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-sm bg-surface-50 px-2.5 py-2">
        <Headset className="size-3.5 shrink-0 text-brand-500" strokeWidth={1.75} />
        <span className="text-[10px] leading-tight text-ink-600">
          Rata-rata dioper dalam <span className="font-semibold text-ink-900 tabular">40 detik</span>,
          riwayat chat ikut terbawa
        </span>
      </div>
    </div>
  );
}

/** Analytics — top questions and the trend line behind them. */
export function InsightVisual({ className }: { className?: string }) {
  const topics = [
    { label: "Ongkir dan pengiriman", count: 412, share: 100 },
    { label: "Stok dan ukuran", count: 288, share: 70 },
    { label: "Cara pesan dan bayar", count: 176, share: 43 },
    { label: "Garansi dan retur", count: 94, share: 23 },
  ];

  return (
    <div
      className={cn("rounded-md border border-line bg-white p-4", className)}
      role="img"
      aria-label="Panel laporan berisi topik yang paling sering ditanya, yaitu ongkir, stok, cara pesan dan garansi, di atas grafik chat yang selesai otomatis dan terus naik."
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-medium text-ink-400">Chat selesai otomatis</p>
          <p className="mt-1 font-display text-lg leading-none font-semibold text-ink-900 tabular">
            1.271
          </p>
        </div>
        <span className="rounded-sm bg-success/10 px-1.5 py-0.5 text-[10px] font-semibold text-success tabular">
          +22%
        </span>
      </div>

      <LineChart values={[14, 19, 17, 26, 24, 33, 31, 44, 52]} className="mt-3 h-11" />

      <p className="mt-4 text-[11px] font-medium text-ink-400">Paling sering ditanya</p>
      <ul className="mt-2.5 space-y-2.5">
        {topics.map((topic) => (
          <li key={topic.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="truncate text-[11px] text-ink-900">{topic.label}</span>
              <span className="text-[10px] text-ink-400 tabular">{topic.count}</span>
            </div>
            <Meter value={topic.share} className="mt-1" />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Connected knowledge sources with sync state. */
export function SourcesVisual({ className }: { className?: string }) {
  const sources = [
    { icon: LifeBuoy, name: "Katalog produk", meta: "312 item", state: "Tersinkron" },
    { icon: BookOpen, name: "Daftar harga.xlsx", meta: "148 baris", state: "Tersinkron" },
    { icon: FileText, name: "Aturan ongkir.pdf", meta: "22 halaman", state: "Tersinkron" },
    { icon: TicketCheck, name: "Riwayat chat", meta: "9.480 chat", state: "Diproses" },
    { icon: Globe, name: "Instagram @ayuwangi", meta: "64 post", state: "Tersinkron" },
  ];

  return (
    <div
      className={cn("rounded-md border border-line bg-white p-4 shadow-card", className)}
      role="img"
      aria-label="Sumber jawaban yang tersambung: katalog produk, daftar harga, aturan ongkir, riwayat chat dan Instagram, masing-masing dengan status sinkronisasinya."
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-ink-400">Sumber jawaban</span>
        <span className="text-[10px] font-medium text-ink-400">Diperbarui tiap hari</span>
      </div>

      <ul className="mt-3 space-y-1.5">
        {sources.map(({ icon: Icon, name, meta, state }) => (
          <li
            key={name}
            className="flex items-center gap-2.5 rounded-sm border border-line px-2.5 py-2"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-brand-300/12">
              <Icon className="size-3.5 text-brand-500" strokeWidth={1.75} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11px] font-medium text-ink-900">{name}</span>
              <span className="block text-[10px] text-ink-400 tabular">{meta}</span>
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-[10px] font-medium",
                state === "Tersinkron"
                  ? "bg-success/10 text-success"
                  : "bg-brand-300/14 text-brand-600",
              )}
            >
              {state === "Tersinkron" ? <Check className="size-2.5" strokeWidth={2.5} /> : null}
              {state}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Routing rules and the escalation card they produce. */
export function RoutingVisual({ className }: { className?: string }) {
  const rules = [
    { when: "Pertanyaan soal ongkir", then: "Jawab, catat ke laporan" },
    { when: "Nala ragu di bawah 80%", then: "Oper ke tim CS" },
    { when: "Komplain atau refund", then: "Oper ke pemilik" },
  ];

  return (
    <div
      className={cn("rounded-md border border-line bg-white p-4 shadow-card", className)}
      role="img"
      aria-label="Aturan pengoperan yang memetakan kondisi seperti Nala ragu atau ada komplain ke pihak yang harus mengambil alih, beserta contoh kartu pengoperan."
    >
      <span className="text-[11px] font-medium text-ink-400">Aturan pengoperan</span>

      <ul className="mt-3 space-y-1.5">
        {rules.map((rule) => (
          <li
            key={rule.when}
            className="flex items-center gap-2 rounded-sm border border-line px-2.5 py-2"
          >
            <span className="truncate text-[11px] text-ink-900">{rule.when}</span>
            <ArrowRight className="size-3 shrink-0 text-ink-400" strokeWidth={1.75} />
            <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-brand-600">
              {rule.then}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3 rounded-sm bg-surface-50 p-3">
        <div className="flex items-center gap-2">
          <CircleUserRound className="size-4 text-ink-400" strokeWidth={1.75} />
          <span className="text-[11px] font-medium text-ink-900">Dioper ke Dewi</span>
          <span className="ml-auto text-[10px] text-ink-400 tabular">0:38</span>
        </div>
        <p className="mt-1.5 text-[10px] leading-relaxed text-ink-600">
          Komplain kemasan penyok · 6 chat sebelumnya ikut terbawa · pembeli langganan sejak 2024
        </p>
      </div>
    </div>
  );
}
