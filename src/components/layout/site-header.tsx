"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { company, nav } from "@/content/site";

/**
 * 全站共用 Navbar。手機版導覽連結原本被 `hidden md:flex` 完全藏起來、
 * 沒有替代入口，等於手機使用者連不到 /about 等分頁——這裡補上漢堡選單。
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
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

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-[var(--radius-pill)] bg-ink px-5 py-2 text-sm font-bold text-paper sm:inline-block"
          >
            免費諮詢
          </Link>

          {/* 手機版選單按鈕，md 以上隱藏 */}
          <button
            type="button"
            aria-label={open ? "關閉選單" : "開啟選單"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-line md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 手機版下拉選單 */}
      {open && (
        <nav className="border-t border-line bg-paper px-6 py-4 md:hidden">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm text-ink-soft hover:bg-pink-soft hover:text-pink-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-[var(--radius-pill)] bg-ink px-4 py-2.5 text-center text-sm font-bold text-paper"
              >
                免費諮詢
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
