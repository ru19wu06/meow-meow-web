import { company, social } from "@/content/site";
import { CatMarkIcon } from "@/components/ui/icons";
import { FacebookIcon, InstagramIcon, LineIcon, TiktokIcon } from "@/components/ui/social-icons";

/** 平台圖示清單。href 沒填的（目前是 LINE、抖音）先顯示灰階圖示、不可點擊。 */
const socialLinks = [
  { key: "instagram", label: "Instagram", href: social.instagram.href, Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", href: social.facebook.href, Icon: FacebookIcon },
  { key: "tiktok", label: "抖音 TikTok", href: social.tiktok.href, Icon: TiktokIcon },
  { key: "line", label: "LINE", href: social.line.href, Icon: LineIcon },
] as const;

/**
 * 全站共用頁尾。id="contact" 讓 nav 的「聯絡我們」可以直接錨點過來，
 * 之後要換成完整聯絡表單時，直接在這裡擴充即可。
 */
export function SiteFooter() {
  return (
    <footer id="contact" className="mx-auto w-full max-w-6xl space-y-4 border-t border-line px-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-ink-soft">
          {company.nameZh}　Instagram {social.instagram.label}　Facebook {social.facebook.label}
        </span>
        <CatMarkIcon className="h-6 w-6 text-ink-mute" role="img" aria-label="出圈娛樂貓咪彩蛋標記" />
      </div>

      <div className="flex items-center gap-3">
        {socialLinks.map(({ key, label, href, Icon }) =>
          href ? (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-line text-ink-soft hover:bg-pink-soft hover:text-pink-deep"
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ) : (
            <span
              key={key}
              aria-label={`${label}（連結尚未提供）`}
              title={`${label}（連結尚未提供）`}
              className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-line text-ink-mute opacity-40"
            >
              <Icon className="h-4.5 w-4.5" />
            </span>
          ),
        )}
      </div>
    </footer>
  );
}
