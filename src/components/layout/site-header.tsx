import Image from "next/image";
import Link from "next/link";
import { company, nav } from "@/content/site";

/**
 * 全站共用 Navbar。純伺服器元件，無互動狀態；
 * 手機版先簡化為 logo + 主要 CTA，選單細節留到有需求再補漢堡選單。
 */
export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/logo.png" alt={company.nameZh} width={36} height={36} />
          <span className="font-bold text-ink">出圈娛樂</span>
          <span className="text-xs tracking-widest text-ink-mute">CHU QUAN</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-pink-deep">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-[var(--radius-pill)] bg-ink px-5 py-2 text-sm font-bold text-paper"
        >
          免費諮詢
        </Link>
      </div>
    </header>
  );
}
