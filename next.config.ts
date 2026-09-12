import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 之後封面圖若改放 CDN / IG，在這裡加白名單
    remotePatterns: [
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
