"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SCRIPT_ID = "instagram-embed-script";
const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";

/**
 * Instagram 官方 oEmbed 崁入。用 Instagram 自己的 embed.js 處理 blockquote，
 * 不碰 CDN 直連、不用擔心連結過期，是唯一穩定的嵌入方式。
 *
 * App Router 是 client-side 導航，embed.js 只會在第一次載入時自動掃描一次
 * DOM，所以每次掛載都要手動呼叫 window.instgrm.Embeds.process() 補跑，
 * 否則離開頁面再回來、或同頁多個 embed 會有沒被處理到的空白卡片。
 */
export function InstagramEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const process = () => window.instgrm?.Embeds.process();

    if (window.instgrm) {
      process();
      return;
    }

    const existing = document.getElementById(EMBED_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", process);
      return () => existing.removeEventListener("load", process);
    }

    const script = document.createElement("script");
    script.id = EMBED_SCRIPT_ID;
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, [url]);

  return (
    <blockquote
      ref={ref}
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ background: "#FFF", border: 0, margin: 0, width: "100%", minWidth: "unset" }}
    />
  );
}
