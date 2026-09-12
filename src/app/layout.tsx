import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, Anton } from "next/font/google";
import { company, social, siteUrl } from "@/content/site";
import "./globals.css";

const notoTC = Noto_Sans_TC({
  variable: "--font-noto-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const title = "出圈娛樂股份有限公司 CHU QUAN｜短影音製作・IP 定位・粉專代管";
const description =
  "優質的內容，是讓品牌被看見並深植人心的核心關鍵。出圈娛樂提供短影音製作、短影音 IP 製作、粉絲團代管、網紅業配與電商團購，從內容規劃、現場拍攝到後期製作一站式完成。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s｜出圈娛樂 CHU QUAN",
  },
  description,
  keywords: [
    "短影音製作",
    "短影音代操",
    "網紅行銷",
    "網紅業配",
    "粉絲團代管",
    "電商團購",
    "短影音 IP 製作",
    "社群小編",
    "台灣短影音團隊",
    "出圈娛樂",
  ],
  authors: [{ name: company.nameZh }],
  applicationName: company.nameZh,
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "zh_TW",
    siteName: "出圈娛樂 CHU QUAN",
    title,
    description,
    images: [{ url: "/brand/fb-banner.png", width: 1920, height: 1080, alt: company.nameZh }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/fb-banner.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f7",
};

/** Organization 結構化資料，幫助 Google 在搜尋結果側邊卡片顯示品牌資訊與社群連結。 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.nameZh,
  alternateName: company.nameEn,
  url: siteUrl,
  logo: `${siteUrl}/brand/logo.png`,
  description,
  sameAs: [social.instagram.href, social.facebook.href].filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${notoTC.variable} ${anton.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
