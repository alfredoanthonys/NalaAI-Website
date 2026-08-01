import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Display face, matched to the nala ai wordmark: a geometric sans with a
 * single-storey "a" and circular bowls. Self-hosted by next/font rather than
 * pulled from a third party at runtime, so headings no longer depend on a
 * Fontshare request that could fail.
 */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nala AI — AI sales agent untuk WhatsApp Business",
  description:
    "Balas semua chat WhatsApp 24/7. Nala AI jawab dari katalog dan daftar harga Anda sendiri, follow-up otomatis, dan oper ke tim saat memang perlu orang. Aktif di nomor yang sekarang dalam seminggu.",
  openGraph: {
    title: "Nala AI — AI sales agent untuk WhatsApp Business",
    description:
      "Balas semua chat WhatsApp 24/7. Respon instan, follow-up otomatis, dan handoff ke tim di chat yang sama.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface-0 text-ink-900">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
