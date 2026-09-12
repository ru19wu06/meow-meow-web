import type { SVGProps } from "react";

/**
 * 社群平台圖示。刻意畫成簡化的原創幾何造型（相機、對話框、音符、字母圈），
 * 不是各平台官方商標的精確複刻，純粹用來標示連結去向。
 */

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M13.6 9.2h1.5V6.8h-1.7c-1.7 0-2.8 1.1-2.8 2.9v1.3H8.9v2.4h1.7v5.4h2.4v-5.4h1.7l.3-2.4h-2v-1c0-.6.2-.8.8-.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 4v9.6a2.6 2.6 0 1 1-2.1-2.55"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 4c.3 1.9 1.7 3.3 3.6 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 11.2C4 7.2 7.8 4 12 4s8 3.2 8 7.2c0 3.6-3.4 6.6-7.3 7.1-.3 0-.5.2-.4.5l.2 1.4c.1.5-.3.7-.6.5l-2.4-1.6C6.4 18.3 4 15 4 11.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.6v3.6M12 9.6v3.6M15 9.6v3.6M9 9.6h1.4M13.6 9.6H15"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
