import type { MetadataRoute } from "next";
import { company } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.nameZh}（${company.nameEn}）`,
    short_name: company.nameEn,
    description: "短影音製作・短影音 IP 製作・粉絲團代管・網紅業配",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f7",
    theme_color: "#faf7f7",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
