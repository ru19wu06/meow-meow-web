import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, plans, workflow } from "@/content/site";
import { PawIcon } from "@/components/ui/icons";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const description = "出圈娛樂的服務內容與合作方案——短影音製作、IP 製作、粉絲團代管、網紅業配，從單支客製到一季合約都有。";

export const metadata: Metadata = {
  title: "服務方案",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "服務方案｜出圈娛樂 CHU QUAN", description, url: "/services" },
};

/**
 * 服務內容完整版。首頁「我們會做的事」+「合作方案」是精華版，這裡放完整說明。
 */
export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 space-y-20">
        <section className="space-y-6">
          <span className="seal-badge px-4 py-1.5 text-xs font-bold tracking-[0.2em]">
            SERVICES
          </span>
          <h1 className="max-w-3xl text-3xl font-bold leading-relaxed sm:text-4xl">
            從內容規劃到後期製作，一站式完成
          </h1>
          <p className="max-w-2xl text-ink-soft">
            不管你是第一次嘗試短影音，還是想把帳號經營成一個 IP，我們都先聽你的需求，再決定哪一種服務、哪一種方案適合你。
          </p>
        </section>

        <section id="capabilities" className="space-y-4">
          <h2 className="text-2xl font-bold">服務內容</h2>
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

        <section id="plans" className="space-y-4">
          <h2 className="text-2xl font-bold">合作方案</h2>
          <p className="max-w-2xl text-sm text-ink-soft">
            以下是常見的合作節奏，實際報價依內容難度、拍攝地點與素材量調整，諮詢時會給你明確數字。
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => (
              <li
                key={p.slug}
                className={`rounded-[var(--radius-card)] p-6 ring-1 ${
                  p.featured ? "bg-pink-soft ring-pink" : "bg-surface ring-line"
                }`}
              >
                {p.featured && (
                  <span className="mb-2 inline-block rounded-[var(--radius-pill)] bg-pink-deep px-3 py-1 text-xs font-bold text-paper">
                    最多人選
                  </span>
                )}
                <h3 className="font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-pink-deep">{p.spec}</p>
                <p className="mt-2 text-sm text-ink-soft">{p.detail}</p>
                <p className="mt-3 text-xs text-ink-mute">{p.fit}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="workflow" className="space-y-4">
          <h2 className="text-2xl font-bold">合作流程</h2>
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

        <section className="rounded-[var(--radius-card)] bg-ink p-10 text-center text-paper">
          <h2 className="text-2xl font-bold">還在猶豫選哪個方案？</h2>
          <p className="mt-2 text-sm opacity-80">先聊聊你的需求，我們幫你判斷最適合的節奏。</p>
          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-[var(--radius-pill)] bg-pink px-6 py-3 text-sm font-bold text-ink"
          >
            預約免費諮詢
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
