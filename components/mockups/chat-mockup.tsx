import { ArrowUp, FileText, Link2 } from "lucide-react";

import { NalaMark } from "@/components/site/logo";
import { cn } from "@/lib/utils";

/**
 * DESIGN_SYSTEM §5.5, chat-style card — one user query, one AI response in a
 * lightly shaded sub-panel, pill-shaped quick actions beneath, and a compact
 * "Powered by" footer row.
 */
export function ChatMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-md border border-line bg-white p-4", className)}
      role="img"
      aria-label="Contoh chat: pembeli menanyakan apakah ukuran L masih ada, dan Nala AI menjawab dengan mengutip langsung dari katalog produk."
    >
      {/* User query */}
      <div className="flex justify-end">
        <p className="max-w-[80%] rounded-md rounded-br-sm bg-brand-500 px-3 py-2 text-[12px] leading-relaxed text-white">
          Kak, dress yang navy ukuran L masih ada?
        </p>
      </div>

      {/* AI response in a lightly shaded sub-panel */}
      <div className="mt-3 flex gap-2.5">
        <NalaMark className="mt-0.5 size-6 shrink-0" />
        <div className="min-w-0 flex-1 rounded-md rounded-tl-sm bg-surface-50 p-3">
          <p className="text-[12px] leading-relaxed text-ink-900">
            Masih ada kak, sisa 4 pcs. Harganya Rp 289.000 dan bisa dikirim hari ini kalau pesan
            sebelum jam 3 sore.
          </p>
          <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-sm bg-white px-2 py-1 text-[10px] font-medium text-ink-600">
            <FileText className="size-3 text-brand-500" strokeWidth={1.75} />
            Katalog produk
            <Link2 className="size-3 text-ink-400" strokeWidth={1.75} />
          </span>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-3 flex flex-wrap gap-1.5 pl-8.5">
        <QuickAction>Cek ongkir</QuickAction>
        <QuickAction>Bicara dengan tim</QuickAction>
      </div>

      {/* Composer / footer row */}
      <div className="mt-4 flex items-center gap-2 border-t border-line pt-3">
        <span className="flex-1 truncate text-[11px] text-ink-400">Tulis pertanyaan…</span>
        <span className="hidden text-[10px] text-ink-400 sm:inline">Dijawab oleh Nala AI</span>
        <span className="flex size-6 items-center justify-center rounded-sm bg-brand-500">
          <ArrowUp className="size-3.5 text-white" strokeWidth={2.25} />
        </span>
      </div>
    </div>
  );
}

function QuickAction({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm border border-line bg-surface-50 px-2 py-1 text-[10px] font-medium text-ink-600">
      {children}
    </span>
  );
}
