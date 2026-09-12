import type { SVGProps } from "react";

/**
 * 原創幾何貓掌圖示，取代條列符號用。純向量、無外部素材依賴。
 * 配色交給呼叫端的 className（預設吃 currentColor / .paw-icon）。
 */
export function PawIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="paw-icon" {...props}>
      <ellipse cx="16" cy="21" rx="8" ry="6.5" fill="currentColor" />
      <ellipse cx="6.5" cy="12" rx="3.4" ry="4.2" transform="rotate(-18 6.5 12)" fill="currentColor" />
      <ellipse cx="14" cy="7.5" rx="3.2" ry="4.4" transform="rotate(-4 14 7.5)" fill="currentColor" />
      <ellipse cx="21.5" cy="7.7" rx="3.2" ry="4.4" transform="rotate(6 21.5 7.7)" fill="currentColor" />
      <ellipse cx="27" cy="13.2" rx="3.3" ry="4.2" transform="rotate(20 27 13.2)" fill="currentColor" />
    </svg>
  );
}

/**
 * 原創極簡貓頭剪影，作為頁尾「meow-meow-web」彩蛋與品牌吉祥物暗示。
 */
export function CatMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 36" fill="none" aria-hidden="true" {...props}>
      <path d="M8 2 L14 12 L4 12 Z" fill="currentColor" />
      <path d="M32 2 L36 12 L26 12 Z" fill="currentColor" />
      <circle cx="20" cy="21" r="14" fill="currentColor" />
      <circle cx="15" cy="19" r="1.6" fill="var(--cq-paper)" />
      <circle cx="25" cy="19" r="1.6" fill="var(--cq-paper)" />
      <path d="M17.5 25 Q20 27.5 22.5 25" stroke="var(--cq-paper)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
