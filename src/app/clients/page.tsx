import type { Metadata } from "next";
import { clients, testimonials, social } from "@/content/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const description = "出圈娛樂的代表客戶與合作見證，橫跨餐飲、室內設計、專業服務等產業。";

export const metadata: Metadata = {
  title: "代表客戶",
  description,
  alternates: { canonical: "/clients" },
  openGraph: { title: "代表客戶｜出圈娛樂 CHU QUAN", description, url: "/clients" },
};

/**
 * 代表客戶完整版。首頁「代表客戶」是精華版，這裡放完整客戶列表 + 見證 + IG 導流。
 * 客戶 logo 目前用品牌色文字方塊佔位（見 Client 卡片），收到客戶提供的 logo 檔案後，
 * 在 content/site.ts 該筆資料補上 logo 路徑，改成 <Image src={c.logo} .../> 即可。
 */
export default function ClientsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 space-y-16">
        <section className="space-y-6">
          <span className="seal-badge px-4 py-1.5 text-xs font-bold tracking-[0.2em]">
            OUR CLIENTS
          </span>
          <h1 className="max-w-3xl text-3xl font-bold leading-relaxed sm:text-4xl">
            已經出圈的品牌
          </h1>
          <p className="max-w-2xl text-ink-soft">
            從酒吧、餐飲到室內設計與會計師事務所，不同產業都能用短影音被看見。
          </p>
        </section>

        <section className="space-y-4">
          <ul className="grid gap-6 sm:grid-cols-2">
            {clients.map((c) => (
              <li key={c.name} className="rounded-[var(--radius-card)] bg-surface p-6 ring-1 ring-line">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pink-soft text-lg font-bold text-pink-deep">
                  {c.name.charAt(0)}
                </div>
                <h3 className="font-bold">{c.name}</h3>
                <p className="mt-1 text-xs text-ink-mute">{c.industry}</p>
                <p className="mt-2 text-sm text-ink-soft">{c.note}</p>
              </li>
            ))}
          </ul>
        </section>

        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="rounded-[var(--radius-card)] bg-pink-soft p-8 text-lg leading-relaxed sm:p-10"
          >
            「{t.quote}」
            <footer className="mt-3 text-sm text-ink-soft">
              — {t.author}，{t.role}
            </footer>
          </blockquote>
        ))}

        {/* IG 導流卡：目前來源網站只公開帳號主頁連結，沒有個別貼文可嵌入，
            先做成一張連到主頁的導流卡，之後有個別貼文網址可以換成真的嵌入牆 */}
        <section className="flex flex-col items-start gap-4 rounded-[var(--radius-card)] bg-ink p-8 text-paper sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs tracking-widest text-gold">MORE ON INSTAGRAM</p>
            <h2 className="mt-2 text-xl font-bold">更多合作案例都在 IG 上</h2>
            <p className="mt-1 text-sm opacity-75">{social.instagram.label}</p>
          </div>
          <a
            href={social.instagram.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-[var(--radius-pill)] bg-pink px-6 py-3 text-sm font-bold text-ink"
          >
            前往 Instagram
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
