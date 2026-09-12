import Image from "next/image";
import Link from "next/link";
import {
  company,
  capabilities,
  plans,
  workflow,
  shorts,
  clients,
  testimonials,
} from "@/content/site";
import { PawIcon } from "@/components/ui/icons";
import { InstagramEmbed } from "@/components/ui/instagram-embed";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/**
 * 首頁骨架 — 區塊順序即客戶動線：
 * 品牌 → 我們會做什麼 → 短影音牆（作品先說話）→ 合作方案 → 合作流程 → 代表客戶 → 團隊 → 聯絡
 * 團隊、服務的完整版另外開了 /about、/services 兩頁，首頁只放精華版 + 連結過去。
 * 視覺細節以 Figma 定稿為準，這裡先確保資料串接與結構正確。
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 space-y-24">
      <section className="ink-wash relative space-y-6">
        <Image src="/brand/logo.png" alt={company.nameZh} width={120} height={120} priority />
        <p className="text-5xl font-black tracking-tight text-ink sm:text-7xl">出圈娛樂</p>
        <span className="seal-badge px-4 py-1.5 text-xs font-bold tracking-[0.2em]">
          SINCE {company.since}
        </span>
        <h1 className="max-w-3xl text-2xl font-bold leading-relaxed sm:text-3xl">
          {company.tagline}
        </h1>
        <p className="max-w-2xl text-ink-soft">{company.intro}</p>
        <p className="text-sm text-pink-deep">{company.oneStop.join("　→　")}</p>

        {/* 貓咪彩蛋：兩隻貓咪玩耍貼紙，純裝飾、不影響閱讀動線 */}
        <Image
          src="/cats/cats-playing.png"
          alt=""
          width={168}
          height={168}
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 top-0 hidden w-36 -rotate-6 opacity-90 sm:block lg:w-44"
        />
      </section>

      <section id="capabilities" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">我們會做的事</h2>
          <Link href="/services" className="text-sm text-pink-deep hover:underline">
            查看完整服務方案 →
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c) => (
            <li key={c.no} className="rounded-[var(--radius-card)] bg-surface p-6 ring-1 ring-line">
              <span className="font-display text-2xl text-pink-deep">{c.no}</span>
              <h3 className="mt-1 font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{c.summary}</p>
              <ul className="mt-3 space-y-1.5">
                {c.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-pink-deep">
                    <PawIcon className="h-3.5 w-3.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section id="shorts" className="space-y-4">
        <h2 className="text-xl font-bold">短影音作品</h2>
        <p className="text-sm text-ink-soft">實際上線案例，直接嵌自 Instagram，點開可播放。</p>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {shorts.map((v) => (
            <li
              key={v.id}
              className="space-y-2 rounded-[var(--radius-card)] bg-pink-soft/50 p-3 ring-2 ring-pink"
            >
              <p className="px-1 text-xs font-bold text-pink-deep">{v.client}</p>
              <InstagramEmbed url={v.src} />
            </li>
          ))}
        </ul>
      </section>

      <section id="plans" className="space-y-4">
        <h2 className="text-xl font-bold">合作方案</h2>
        <ul className="grid gap-4 sm:grid-cols-4">
          {plans.map((p) => (
            <li
              key={p.slug}
              className={`rounded-[var(--radius-card)] p-6 ring-1 ${
                p.featured ? "bg-pink-soft ring-pink" : "bg-surface ring-line"
              }`}
            >
              <h3 className="font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-pink-deep">{p.spec}</p>
              <p className="mt-2 text-sm text-ink-soft">{p.detail}</p>
              <p className="mt-3 text-xs text-ink-mute">{p.fit}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="workflow" className="relative space-y-4">
        <h2 className="text-xl font-bold">合作流程</h2>
        {/* 貓咪彩蛋：叼著爪印企劃表的貓咪，呼應「內容規劃」 */}
        <Image
          src="/cats/cat-planning.png"
          alt=""
          width={128}
          height={128}
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden w-24 opacity-90 sm:block"
        />
        <ol className="grid gap-4 sm:grid-cols-3">
          {workflow.map((step) => (
            <li key={step.no} className="rounded-[var(--radius-card)] bg-surface p-6 ring-1 ring-line">
              <span className="font-display text-2xl text-pink-deep">{step.no}</span>
              <h3 className="mt-1 font-bold">{step.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{step.desc}</p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-mute">
                <PawIcon className="h-3 w-3" />
                交付：{step.deliverable}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="clients" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">代表客戶</h2>
          <Link href="/clients" className="text-sm text-pink-deep hover:underline">
            查看完整客戶列表 →
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-4">
          {clients.map((c) => (
            <li key={c.name} className="rounded-[var(--radius-card)] bg-surface p-6 ring-1 ring-line">
              {/* 客戶 logo：目前用品牌色文字方塊佔位，收到客戶提供的 logo 檔案後，
                  在 content/site.ts 該筆資料補上 logo 路徑，改成 <Image src={c.logo} .../> 即可 */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-soft text-sm font-bold text-pink-deep">
                {c.name.charAt(0)}
              </div>
              <h3 className="font-bold">{c.name}</h3>
              <p className="mt-1 text-xs text-ink-mute">{c.industry}</p>
              <p className="mt-2 text-sm text-ink-soft">{c.note}</p>
            </li>
          ))}
        </ul>
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="relative overflow-hidden rounded-[var(--radius-card)] bg-pink-soft p-8 text-lg leading-relaxed"
          >
            「{t.quote}」
            <footer className="mt-3 text-sm text-ink-soft">
              — {t.author}，{t.role}
            </footer>
            {/* 貓咪彩蛋：業績成長圖表貓，呼應客戶見證裡的成長數字 */}
            <Image
              src="/cats/cat-growth.png"
              alt=""
              width={120}
              height={120}
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -right-4 hidden w-28 opacity-95 sm:block"
            />
          </blockquote>
        ))}
      </section>

      </main>
      <SiteFooter />
    </>
  );
}
