import { company, social } from "@/content/site";
import { CatMarkIcon } from "@/components/ui/icons";

/**
 * 全站共用頁尾。id="contact" 讓 nav 的「聯絡我們」可以直接錨點過來，
 * 之後要換成完整聯絡表單時，直接在這裡擴充即可。
 */
export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto flex w-full max-w-6xl items-center justify-between border-t border-line px-6 py-8 text-sm text-ink-soft"
    >
      <span>
        {company.nameZh}　Instagram {social.instagram.label}　Facebook {social.facebook.label}
      </span>
      <CatMarkIcon className="h-6 w-6 text-ink-mute" role="img" aria-label="出圈娛樂貓咪彩蛋標記" />
    </footer>
  );
}
