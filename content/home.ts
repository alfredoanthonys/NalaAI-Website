/**
 * Every string and data structure the home page renders lives here.
 *
 * Sections import from this module and render — no copy is hardcoded inside
 * components. When the headless CMS lands (PRD CMS-1), swapping this file for a
 * fetch is a data-source change, not a rewrite.
 *
 * Bahasa Indonesia, written for business owners rather than for engineers.
 * House rules for anyone editing this file:
 *   • "Anda" throughout, never "kamu" — this is a B2B site.
 *   • No em dashes. Break the sentence or use a comma.
 *   • Short sentences. Two per paragraph is the ceiling, one is better.
 *   • Lead with the pain or the number, then the mechanism. No aphorisms, no
 *     "bukan X melainkan Y" turns, no paragraph that ends on a clever line.
 *   • Keep the English that Indonesian business owners already say out loud:
 *     leads, closing, follow-up, slow respond, handoff, free trial, dashboard,
 *     ongkir, katalog, WhatsApp Business, SLA.
 *   • Headings and card titles in Title Case, body copy in sentence case.
 */

export const nav = {
  links: [
    { label: "Tentang Kami", href: "#about" },
    { label: "Fitur", href: "#features" },
    { label: "Harga", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "WhatsApp Kami", href: "#consultation" },
} as const;

export const hero = {
  eyebrow: "AI sales agent untuk WhatsApp Business",
  /**
   * DESIGN_SYSTEM §3 signature detail: exactly one word sits in a rounded
   * highlight chip. Used once on the page, never in body copy.
   */
  headline: {
    before: "Balas Semua Chat WhatsApp",
    highlight: "24/7",
    after: ", Closing Jalan Terus",
  },
  subtext:
    "Chat masuk terus tapi tim tidak cukup? Nala AI balas instan 24/7, jawab dari katalog dan daftar harga Anda sendiri, lalu oper ke tim saat memang perlu orang.",
  primaryCta: { label: "WhatsApp Kami", href: "#consultation" },
  secondaryCta: { label: "Lihat Cara Kerjanya", href: "#features" },
  note: "Tanpa kartu kredit · 14 hari free trial · Aktif dalam seminggu",
} as const;

/**
 * The About section.
 *
 * No heading or standfirst: the section opens on the WhatsApp mockup itself and
 * these three lines are the caption under it. They deliberately contain no
 * company facts — no founding year, headcount, office or customer count —
 * because those are claims about reality and nobody has given me the real ones.
 * What is here instead is positioning and commitments, all of which the rest of
 * the site already asserts. If you want the harder credentials in this section,
 * supply them and they can be added.
 */
export const about = {
  principles: [
    {
      title: "Paham Cara Pelanggan Chat",
      body: "“ready ga kak?”, “brp harganya?”, “bisa COD?”. Nala tetap paham maksudnya.",
    },
    {
      title: "Jawab dari Info Anda Sendiri",
      body: "Cuma menjawab dari info yang Anda berikan. Tidak pernah mengarang diskon.",
    },
    {
      title: "Tim Anda Pegang Kendali",
      body: "Ambil alih chat kapan saja. Komplain dan refund selalu ke orang.",
    },
  ],
} as const;


/**
 * A side-by-side of how customer questions get handled today versus with Nala.
 * The two lists are written as pairs — item 1 on the left is answered by item 1
 * on the right — so the columns can be read across as well as down.
 */
export const comparison = {
  heading: "Masih Balas Chat Manual? Ini Bedanya dengan Nala AI",
  subheading:
    "Bandingkan cara kerja WhatsApp Anda sekarang dengan setelah AI agent yang pegang.",
  before: {
    label: "Cara lama",
    title: "Balas Manual & Chatbot Biasa",
    items: [
      "Chat menumpuk semalaman dan sepanjang akhir pekan",
      "100+ jam per bulan habis untuk pertanyaan yang itu-itu saja",
      "Karyawan kasih harga atau stok yang sudah tidak berlaku",
      "Leads hilang karena slow respond, pembeli checkout di tempat lain",
      "Pembeli yang belum bayar tidak pernah di-follow-up",
      "Tidak ada data pertanyaan apa yang paling sering masuk",
      "Training admin baru makan waktu berminggu-minggu",
    ],
  },
  after: {
    label: "Dengan Nala AI",
    title: "AI Agent yang Hafal Katalog dan Aturan Anda",
    items: [
      "Respon instan 24/7, jam 3 pagi maupun hari Minggu",
      "68% chat selesai otomatis, tanpa melibatkan tim",
      "Jawaban diambil dari katalog dan daftar harga Anda sendiri",
      "Pembeli dapat jawaban selagi masih mempertimbangkan",
      "Follow-up otomatis ke pembeli yang belum lanjut",
      "Semua pertanyaan tercatat dan celah katalog langsung ketahuan",
      "Aktif kurang dari seminggu, tanpa training model",
    ],
  },
  primaryCta: { label: "WhatsApp Kami", href: "#consultation" },
} as const;

/**
 * The one capability section on the page: what Nala does, paired with what that
 * changes for the reader. Each row is written the same way on purpose — the
 * title states the outcome, the body explains the mechanism that produces it,
 * and the chip lists the concrete capability names a buyer will scan for.
 */
export const features = {
  heading: "Gausah Lagi Pusing Balas Chat Satu-Satu, Nala yang Bantu",
  subheading:
    "Biarkan AI yang balas ribuan chat berulang, tim Anda tinggal fokus ke closing.",
  items: [
    {
      mockup: "chat" as const,
      title: "Produk atau Layanan Banyak, Pertanyaannya Itu-Itu Saja?",
      body: "Nala menjawab dari informasi bisnis yang Anda kirim: produk atau layanan, harga, ketentuan pengiriman, dan jam buka. Yang disebut selalu informasi Anda yang sebenarnya.",
      capabilities: "Paham konteks · Bahasa & Inggris",
    },
    {
      mockup: "sources" as const,
      title: "Pakai Nomor yang Sekarang, Aktif Kurang dari Seminggu",
      body: "Kirim file Excel, PDF, atau foto beserta caption-nya, dan semua itu langsung jadi sumber jawaban Nala. Nomor WhatsApp Business Anda tetap yang sekarang dan riwayat chat tidak hilang. Tanpa training model, tanpa developer.",
      capabilities: "Nomor tetap · Cukup kirim Excel atau PDF · Tanpa developer",
    },
    {
      mockup: "resolution" as const,
      title: "Pembeli Kabur Sebelum Sempat Dibalas?",
      body: "Pertanyaan seperti harga, ukuran, ongkir, dan jam buka dijawab begitu chat masuk. Sekitar 68% chat selesai di situ juga, jam 3 pagi sama cepatnya dengan jam 3 sore. Sisanya dioper ke tim Anda lengkap dengan isi chat sebelumnya, jadi pembeli tidak perlu cerita ulang.",
      capabilities: "68% selesai otomatis · Ambil alih sekali tap",
    },
    {
      mockup: "routing" as const,
      title: "Anda yang Menentukan Apa yang Boleh Dijawab AI",
      body: "Aturannya Anda tulis dengan bahasa sehari-hari, sama seperti memberi arahan ke admin baru. Komplain dan refund selalu ke orang, permintaan grosir selalu ke pemilik. Kalau Nala ragu, chat-nya dioper ke tim, bukan dijawab asal.",
      capabilities: "Aturan bahasa sehari-hari · Topik yang selalu dioper",
    },
    {
      mockup: "insight" as const,
      title: "Lihat Pertanyaan Apa yang Paling Sering Masuk",
      body: "Semua chat tercatat dan dikelompokkan per topik, jadi Anda tahu pertanyaan mana yang paling sering masuk dan mana yang belum bisa dijawab Nala. Tambahkan informasi yang kurang sekali saja, chat berikutnya sudah terjawab sendiri.",
      capabilities: "Laporan pertanyaan teratas · Pelacakan orderan",
    },
  ],
} as const;

/**
 * The dashboard closes the argument, so it is its own section rather than a
 * sixth capability row. The five rows above each answer "can it do X"; this one
 * answers "and where does all of that land" — which is a summary, not another
 * item in a list, and reads wrong squeezed into a 420px thumbnail beside a
 * paragraph.
 *
 * The four points are captions to the mockup and name only what is actually
 * drawn in it: the tiles, the percentages, the catalog, the live queue.
 */
export const dashboard = {
  heading: "Semuanya dalam Satu Dashboard",
  subheading:
    "Berapa pun nomor WhatsApp Business yang Anda pegang, semuanya masuk ke satu layar. Lihat berapa chat masuk, berapa yang selesai otomatis, dan mana yang perlu tindak lanjut.",
  points: [
    {
      title: "Semua Nomor Satu Layar",
      body: "Setiap nomor WhatsApp Business Anda masuk ke dashboard yang sama.",
    },
    {
      title: "Hasilnya, Bukan Cuma Aktivitas",
      body: "Berapa chat masuk, berapa persen selesai otomatis, dan berapa yang jadi orderan.",
    },
    {
      title: "Ubah Info Sekali Saja",
      body: "Ganti harga atau tandai stok kosong sekali, chat berikutnya langsung ikut.",
    },
    {
      title: "Ambil Alih Kapan Saja",
      body: "Antrean chat tampil realtime, dan tim bisa masuk ke percakapan mana pun.",
    },
  ],
} as const;

/**
 * PLACEHOLDER TESTIMONIALS. Every business, person, quote and tenure below is
 * invented, and the headshots are stock photography — they stand in for the
 * layout until real customers are signed. Replace the whole block before the
 * site goes live; published testimonials that name a business are a claim about
 * a real relationship, not decoration. The numbers inside the quotes are
 * invented too, and are the first thing to check when real quotes come in.
 *
 * Each quote carries one distinct objection (after-hours load, accuracy, repeat
 * context, clinical safety, language, connectivity) so the row argues a different
 * point in every card rather than six ways of saying "it is fast".
 */
export const testimonials = {
  heading: "Apa Kata Bisnis yang Sudah Pakai Nala AI",
  subheading:
    "Langsung dari tim yang memakainya tiap hari. Apa yang mereka serahkan ke Nala, dan apa yang berubah setelah aktif.",
  quotes: [
    {
      company: "Kopi Rumpun",
      quote:
        "Dulu chat yang masuk setelah jam 9 malam baru dibalas besok pagi. Sekarang menu, outlet, dan pengiriman dijawab semalaman, jadi tim datang ke antrean 20 chat, bukan 200.",
      author: "Bagus Prasetyo",
      role: "Kepala Layanan Pelanggan",
      avatar: "bagus-prasetyo",
      months: 9,
    },
    {
      company: "Ayuwangi",
      quote:
        "Pembeli selalu tanya kandungan dan ongkir sebelum checkout. Nala jawab langsung dari daftar produk kami, jadi tidak ada klaim soal formula yang mengarang.",
      author: "Dewi Anjani",
      role: "Co-founder",
      avatar: "dewi-anjani",
      months: 7,
    },
    {
      company: "Kirimaju",
      quote:
        "80% chat yang masuk cuma menanyakan posisi paket. Sekarang itu selesai otomatis, dan yang dioper ke tim sudah lengkap dengan riwayatnya.",
      author: "Reza Mahendra",
      role: "COO",
      avatar: "reza-mahendra",
      months: 11,
    },
    {
      company: "Sehatera",
      quote:
        "Apa pun yang menyangkut medis langsung ke orang, sedangkan jadwal, cakupan, dan tagihan diambil Nala. Menyusun aturannya cuma perlu satu sore.",
      author: "Salma Nuraini",
      role: "Kepala Tim CS",
      avatar: "salma-nuraini",
      months: 5,
    },
    {
      company: "Batikara",
      quote:
        "Instagram mengarahkan semua orang ke WhatsApp kami, dan di situ kami kewalahan. Nala jawab Bahasa atau Inggris tergantung siapa yang tanya, dan panduan ukurannya dibaca lebih teliti daripada admin musiman kami.",
      author: "Hendra Wijaya",
      role: "CEO",
      avatar: "hendra-wijaya",
      months: 14,
    },
    {
      company: "Tanikita",
      quote:
        "Separuh pembeli kami chat dari desa dengan sinyal seadanya dan berharap dibalas sebelum subuh. Cuma Nala yang cukup cepat buat mereka dan tetap tahu stok yang benar-benar ada.",
      author: "Yoga Pratama",
      role: "Founder",
      avatar: "yoga-pratama",
      months: 8,
    },
  ],
} as const;

export type BillingCycle = "monthly" | "annual";

/**
 * The toggle's keys stay English because they are logic, not copy. These are
 * what the reader sees.
 */
export const billingCycleLabels: Record<BillingCycle, string> = {
  monthly: "Bulanan",
  annual: "Tahunan",
};

/**
 * The section deliberately does not announce a meter in the heading. What it
 * says instead is that the agent itself is identical in every plan, so the
 * reader is choosing a scale rather than buying a better AI. "Harga transparan"
 * is what every pricing page says and tells a buyer nothing, so it is not that
 * either.
 *
 * The bill follows WhatsApp Business numbers, not chat volume: chats are
 * unlimited on every plan, and the FAQ is the only place that spells the
 * formula out. The per-tier number caps (1 / 5 / unlimited) are placeholders
 * and need confirming before launch.
 */
export const pricing = {
  heading: "Pilih Paket Sesuai Skala Bisnis Anda",
  subheading:
    "Semua paket berisi AI agent yang sama di nomor WhatsApp Anda. Yang membedakan cuma skalanya dan seberapa detail Anda bisa mengaturnya.",
  annualNote: "Hemat 20% dengan pembayaran tahunan",
  featuredBadge: "Paling populer",
  perMonth: "/bulan",
  billedAnnually: "ditagih per tahun",
  billedMonthly: "ditagih per bulan",
  plans: [
    {
      name: "Starter",
      icon: "Sparkle",
      priceMonthly: 499_000,
      priceAnnual: 399_000,
      description: "Satu nomor WhatsApp, jawaban dari satu daftar produk.",
      cta: "Coba Gratis",
      featuresLabel: "Termasuk",
      features: [
        "1 nomor WhatsApp Business",
        "Chat tanpa batas",
        "1 daftar produk atau harga",
        "Handoff ke tim Anda",
        "Laporan chat standar",
      ],
      featured: false,
    },
    {
      name: "Growth",
      icon: "Zap",
      priceMonthly: 1_499_000,
      priceAnnual: 1_199_000,
      description: "Aturan khusus, banyak nomor, dan catatan tiap chat.",
      cta: "WhatsApp Kami",
      featuresLabel: "Semua di Starter, plus",
      features: [
        "Sampai 5 nomor WhatsApp Business",
        "Chat tanpa batas di semua nomor",
        "Daftar produk dan harga tanpa batas",
        "Aturan handoff yang bisa diatur sendiri",
        "Riwayat chat lengkap dan bisa diekspor",
        "Laporan pertanyaan teratas dan yang belum terjawab",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      icon: "Building2",
      priceMonthly: 3_999_000,
      priceAnnual: 3_199_000,
      description: "Untuk brand dengan banyak nomor dan target SLA.",
      cta: "Hubungi Sales",
      featuresLabel: "Semua di Growth, plus",
      features: [
        "Nomor WhatsApp Business tanpa batas",
        "Hak akses per peran untuk tim Anda",
        "Pilihan lokasi penyimpanan data",
        "SLA uptime 99,9%",
        "Manajer onboarding khusus",
      ],
      featured: false,
    },
  ],
} as const;

/**
 * The subheading names the four things the list actually covers. An FAQ heading
 * that only says "questions" makes the reader open accordions to find out
 * whether their concern is in there; naming the territory lets them skip
 * straight to the one they came for.
 */
export const faq = {
  heading: "Yang Biasanya Ditanyakan Sebelum Mulai",
  subheading:
    "Soal akurasi, handoff ke tim, integrasi, dan biaya. Kalau pertanyaan Anda belum ada di sini, chat kami saja.",
  contactCta: { label: "Hubungi Tim Kami", href: "#consultation" },
  items: [
    {
      question: "Berapa lama sampai Nala AI aktif di WhatsApp saya?",
      answer:
        "Kebanyakan bisnis aktif dalam seminggu. Menyambungkan nomor dan memasukkan daftar produk cukup satu sore. Sisanya dipakai untuk mengecek jawaban Nala dan menyusun aturan handoff sebelum diarahkan ke pelanggan asli.",
    },
    {
      question: "Apakah Nala bisa mengarang harga atau stok?",
      answer:
        "Tidak. Nala cuma menjawab dari daftar produk dan harga yang Anda kirim. Di luar itu, misalnya pesanan custom, komplain, atau diskon yang tidak pernah Anda buat, Nala bilang akan dicek dulu lalu oper chat-nya ke tim.",
    },
    {
      question: "Bagaimana kalau pelanggan butuh bicara dengan orang?",
      answer:
        "Tim Anda lanjut di chat WhatsApp yang sama. Tidak ada chat baru, tidak ada aplikasi baru. Tim bisa lihat semua yang sudah dijawab Nala, jadi tidak perlu menanyakan nomor order dua kali. Nala ambil alih lagi begitu Anda serahkan.",
    },
    {
      question: "Apakah saya harus ganti nomor WhatsApp?",
      answer:
        "Tidak. Nala jalan di nomor WhatsApp Business yang sudah Anda pakai, dan riwayat chat tetap di tempatnya. Pelanggan tetap lihat nomor yang selama ini mereka hubungi, cuma sekarang dibalas jauh lebih cepat.",
    },
    {
      question: "Bagaimana cara menghitung biayanya?",
      answer:
        "Dihitung dari jumlah nomor WhatsApp Business yang dipakai, bukan dari jumlah chat atau jumlah karyawan. Chat masuk berapa pun, tagihannya tetap sama. Paket bisa diubah kapan saja, dan pembayaran tahunan hemat 20%.",
    },
    {
      question: "Bagaimana data pelanggan kami diperlakukan?",
      answer:
        "Chat dienkripsi saat dikirim maupun saat disimpan, dan percakapan Anda tidak pernah dipakai untuk melatih model bersama. Data pribadi seperti nomor telepon dan alamat bisa disamarkan sebelum sampai ke model. Paket Enterprise menambahkan audit log dan pilihan lokasi penyimpanan data.",
    },
  ],
} as const;

export const closingCta = {
  heading: "Ubah Setiap Chat Jadi Orderan",
  subtext:
    "Coba langsung di nomor WhatsApp Anda sendiri. Respon instan 24/7, follow-up jalan otomatis, dan tim Anda tinggal fokus ke closing.",
  points: ["Setup 10 menit", "14 hari free trial", "Konsultasi 1-on-1"],
  primaryCta: { label: "WhatsApp Kami", href: "#consultation" },
} as const;

/**
 * The floating WhatsApp button.
 *
 * `number` is intentionally empty: with no number set the button renders but
 * does nothing. Fill it in with the WhatsApp Business number in full
 * international form, digits only and no leading "+" (0812-3456-7890 becomes
 * "6281234567890"), and the button starts opening a chat with `prefill` typed.
 */
export const whatsappFab = {
  number: "",
  /** Sits on the pill itself, so it has to stay short enough not to wrap. */
  label: "WhatsApp Kami",
  prefill: "Halo Nala AI, saya mau tanya soal penerapannya di WhatsApp bisnis kami.",
} as const;

export const footer = {
  blurb:
    "AI agent yang menjalankan WhatsApp Business Anda. Balas instan 24/7, dan tahu kapan chat harus dioper ke tim Anda.",
  columns: [
    {
      title: "Produk",
      links: [
        { label: "Fitur", href: "#features" },
        { label: "Dashboard", href: "#features" },
        { label: "Harga", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Perusahaan",
      links: [
        { label: "Tentang Kami", href: "#about" },
        { label: "Kenapa Nala AI", href: "#testimonials" },
        { label: "Kontak", href: "#consultation" },
      ],
    },
    {
      title: "Informasi",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Perbandingan", href: "#problem" },
        { label: "Keamanan Data", href: "#faq" },
      ],
    },
  ],
  legal: [
    { label: "Kebijakan Privasi", href: "#privacy" },
    { label: "Syarat & Ketentuan", href: "#terms" },
    { label: "Pengaturan Cookie", href: "#cookies" },
  ],
} as const;
