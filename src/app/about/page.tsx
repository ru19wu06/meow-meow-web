import type { Metadata } from "next";
import Image from "next/image";
import { company, team } from "@/content/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const description = "出圈娛樂的團隊介紹與創辦理念——我們是誰、為什麼做短影音、憑什麼讓你放心交付內容。";

export const metadata: Metadata = {
  title: "關於我們",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "關於我們｜出圈娛樂 CHU QUAN", description, url: "/about" },
};

/**
 * 關於我們 / 團隊介紹。首頁「團隊」區塊是精華版，這裡放完整成員介紹。
 */
export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 space-y-20">
        <section className="ink-wash space-y-6">
          <span className="seal-badge px-4 py-1.5 text-xs font-bold tracking-[0.2em]">
            ABOUT US
          </span>
          <h1 className="max-w-3xl text-3xl font-bold leading-relaxed sm:text-4xl">
            {company.motto}
          </h1>
          <p className="max-w-2xl text-ink-soft">{company.intro}</p>
          <p className="max-w-2xl text-ink-soft">
            創辦人以九年自媒體實戰經驗創立出圈，把 IP 創立的精髓轉化為可執行的商業策略——從內容規劃、現場拍攝到後期製作，
            我們把 {company.oneStop.join("、")} 收進同一個團隊，減少你在多個窗口間來回溝通的成本。
          </p>
        </section>

        <section id="team" className="relative space-y-6">
          <h2 className="text-2xl font-bold">團隊成員</h2>
          {/* 貓咪彩蛋：打領帶的專業貓 */}
          <Image
            src="/cats/cat-tie.png"
            alt=""
            width={150}
            height={150}
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden w-28 opacity-90 sm:block"
          />

          {/* 負責人：放大版面單獨呈現 */}
          {team
            .filter((m) => m.isFounder)
            .map((m) => (
              <div
                key={m.name}
                className="flex flex-col gap-6 rounded-[var(--radius-card)] bg-pink-soft p-8 ring-1 ring-pink sm:flex-row sm:items-center sm:p-10"
              >
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={`${m.name}${m.legalName ? `（${m.legalName}）` : ""}`}
                    width={144}
                    height={144}
                    className="h-28 w-28 flex-none rounded-full object-cover ring-4 ring-gold sm:h-36 sm:w-36"
                  />
                ) : (
                  <div className="h-28 w-28 flex-none rounded-full bg-surface ring-4 ring-gold sm:h-36 sm:w-36" />
                )}
                <div>
                  <p className="text-xs font-bold tracking-widest text-pink-deep">{m.role}</p>
                  <h3 className="mt-1 text-3xl font-bold text-ink sm:text-4xl">
                    {m.name}
                    {m.legalName && (
                      <span className="ml-3 text-lg font-medium text-ink-soft">{m.legalName}</span>
                    )}
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{m.bio}</p>
                  {m.socials && <p className="mt-4 text-sm text-ink-mute">{m.socials.join(" · ")}</p>}
                </div>
              </div>
            ))}

          {/* 其他成員：並排小卡 */}
          <ul className="grid gap-6 sm:grid-cols-2">
            {team
              .filter((m) => !m.isFounder)
              .map((m) => (
                <li key={m.name} className="rounded-[var(--radius-card)] bg-surface p-6 ring-1 ring-line">
                  <div className="mb-4 h-16 w-16 rounded-full bg-pink-soft ring-2 ring-gold" />
                  <h3 className="font-bold">{m.name}</h3>
                  <p className="mt-1 text-xs text-pink-deep">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
                  {m.socials && (
                    <p className="mt-4 text-xs text-ink-mute">{m.socials.join(" · ")}</p>
                  )}
                </li>
              ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
