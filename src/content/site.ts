/**
 * 全站文案與資料來源。內容取自現有官網 a0956996088.wixsite.com/my-site-3。
 * 客戶要改內容只需要動這個檔案，之後要接 CMS（Sanity / Notion）也只換這層。
 */

/**
 * 正式網域尚未確認，先用這個佔位網域撐起 SEO 需要的絕對網址
 * （metadataBase、sitemap、canonical、JSON-LD）。
 * 拿到正式網域後，只要改這一行，或設定 NEXT_PUBLIC_SITE_URL 環境變數即可全站生效。
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chuquan.tw";

export const company = {
  nameZh: "出圈娛樂股份有限公司",
  nameEn: "CHU QUAN",
  since: 2025,
  /** 官網主標語 */
  tagline: "優質的內容，是讓品牌被看見並深植人心的核心關鍵。",
  intro:
    "我們是一群兼具創新思維與深度傾聽的專業內容團隊。不追求低質感的流量，而是先聽懂你的需求，再規劃高品質、高轉單的短影音內容。",
  /** 創辦人理念 */
  motto: "我們不是來幫你做實驗的，我們是來幫你精準避坑的。",
  oneStop: ["內容規劃", "現場拍攝", "後期製作"],
} as const;

export const social = {
  instagram: { label: "@chuquan_sv", href: "https://www.instagram.com/chuquan_sv/" },
  facebook: { label: "出圈短影音製作", href: "https://www.facebook.com/" },
  line: { label: "LINE official", href: "" },
  discord: { label: "Discord", href: "" },
  tiktok: { label: "TikTok", href: "" },
} as const;

export const nav = [
  { label: "首頁", href: "/" },
  { label: "關於我們", href: "/about" },
  { label: "服務方案", href: "/services" },
  { label: "短影音作品", href: "/#shorts" },
  { label: "代表客戶", href: "/clients" },
  { label: "聯絡我們", href: "/#contact" },
] as const;

/* ------------------------------------------------------------------ */
/* 服務能力：我們會做的四件事                                            */
/* ------------------------------------------------------------------ */

export type Capability = {
  no: string;
  title: string;
  summary: string;
  points: string[];
};

export const capabilities: Capability[] = [
  {
    no: "01",
    title: "短影音製作",
    summary: "從內容規劃、現場拍攝到後期製作，一站式完成能被演算法推出去的影片。",
    points: ["內容規劃", "現場拍攝", "後期製作", "腳本企劃"],
  },
  {
    no: "02",
    title: "短影音 IP 製作",
    summary: "把創辦人或品牌人設做成可長期經營的 IP，讓內容不只有一次性曝光。",
    points: ["IP 定位", "人設梳理", "系列內容"],
  },
  {
    no: "03",
    title: "粉絲團代管",
    summary: "內容操盤與粉專代發，讓品牌帳號長出穩定聲量，不用自己每天想貼文。",
    points: ["帳號管理", "內容操盤", "粉專代發"],
  },
  {
    no: "04",
    title: "網紅業配・電商團購",
    summary: "依受眾輪廓媒合網紅、規劃團購檔期，把看完影片的人直接變成訂單。",
    points: ["網紅媒合", "檔期控管", "導購素材"],
  },
];

/* ------------------------------------------------------------------ */
/* 合作方案：官網服務項目頁的四種方案                                     */
/* ------------------------------------------------------------------ */

export type Plan = {
  slug: string;
  name: string;
  spec: string;
  fit: string;
  detail: string;
  /** 是否為主推方案，UI 上會標記 */
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    slug: "single",
    name: "單支客製",
    spec: "單支影片 · 客製企劃",
    fit: "適合個人網紅 / 品牌活動",
    detail: "活動紀錄、Vlog、探店、開箱、跟拍。先用一支影片試水溫，看得到成果再談長期。",
  },
  {
    slug: "steady",
    name: "穩健經營",
    spec: "半年合約 · 每月 4 支影片",
    fit: "適合小型企業 / 店面",
    detail: "用穩定的更新頻率把帳號養起來，適合需要長期累積口碑的實體店家。",
    featured: true,
  },
  {
    slug: "sprint",
    name: "短期衝刺",
    spec: "單月 10 支影片",
    fit: "適合短期大量曝光需求",
    detail: "新品上市、檔期活動、募資倒數，短時間內把聲量集中打出來。",
  },
  {
    slug: "brand-blitz",
    name: "品牌快攻",
    spec: "一季合約 · 每月 10 支影片",
    fit: "適合有快速建立品牌 IP 需求的企業",
    detail: "高密度內容加上 IP 定位，三個月內把品牌形象與聲量一起立起來。",
  },
];

/* ------------------------------------------------------------------ */
/* 合作流程                                                            */
/* ------------------------------------------------------------------ */

export type WorkflowStep = {
  no: string;
  title: string;
  desc: string;
  deliverable: string;
};

export const workflow: WorkflowStep[] = [
  { no: "01", title: "需求諮詢", desc: "先聽你說。了解品牌現況、目標受眾與預算範圍。", deliverable: "需求確認單" },
  { no: "02", title: "IP 定位", desc: "抓出品牌的記憶點與內容方向，決定要用什麼人設說話。", deliverable: "定位提案" },
  { no: "03", title: "內容規劃", desc: "排定檔期、主題與腳本分鏡，方案內的每支影片都有任務。", deliverable: "腳本 / 分鏡" },
  { no: "04", title: "現場拍攝", desc: "團隊到場執行，導演、攝影、收音一次到位。", deliverable: "拍攝素材" },
  { no: "05", title: "後期製作", desc: "剪輯、字幕、配樂與版本調整，依平台輸出直式版本。", deliverable: "成片 / 各平台版本" },
  { no: "06", title: "上線與復盤", desc: "安排發佈、追蹤數據，給出下一檔期的優化建議。", deliverable: "成效報告" },
];

/* ------------------------------------------------------------------ */
/* 短影音作品牆                                                        */
/* ------------------------------------------------------------------ */

export type ShortVideo = {
  id: string;
  title: string;
  client: string;
  /** 平台來源，決定要用哪種嵌入方式 */
  platform: "instagram" | "tiktok" | "youtube" | "self";
  /** 該支 Reels 的正式貼文網址，用 Instagram 官方 embed 崁入，穩定不會過期。 */
  src: string;
  /** 9:16 封面圖，建議 720x1280 */
  poster: string;
  duration: string;
  tags: string[];
  metrics?: { views?: string; engagement?: string };
};

/**
 * 全部 9:16 直式 Reels。四支貼文網址是客戶提供的，順序對應下列四筆——
 * 如果實際對應到的客戶不是這樣排，麻煩告知，我再調整順序。
 */
export const shorts: ShortVideo[] = [
  {
    id: "lclub-01",
    title: "日式酒吧的一晚是這樣開始的",
    client: "L Club｜日式酒吧クラブ",
    platform: "instagram",
    src: "https://www.instagram.com/reel/DKd1SL3SXho/",
    poster: "/brand/ig-cover.png",
    duration: "0:32",
    tags: ["探店", "品牌形象"],
  },
  {
    id: "joe-01",
    title: "冒煙的喬，招牌這樣吃最對",
    client: "冒煙的喬",
    platform: "instagram",
    src: "https://www.instagram.com/reel/Da15yQwzoVs/",
    poster: "/brand/ig-cover.png",
    duration: "0:28",
    tags: ["餐飲", "開箱"],
  },
  {
    id: "feiye-01",
    title: "設計師帶你看實屋改造",
    client: "菲葉室內設計",
    platform: "instagram",
    src: "https://www.instagram.com/reel/DcuhvKBkThA/",
    poster: "/brand/ig-cover.png",
    duration: "0:45",
    tags: ["室內設計", "案例紀錄"],
  },
  {
    id: "chengyi-01",
    title: "會計師 60 秒講懂報稅眉角",
    client: "承毅會計師事務所",
    platform: "instagram",
    src: "https://www.instagram.com/reel/DbmdisxxG-z/",
    poster: "/brand/ig-cover.png",
    duration: "0:36",
    tags: ["專業服務", "知識型"],
  },
];

/* ------------------------------------------------------------------ */
/* 代表客戶與見證                                                       */
/* ------------------------------------------------------------------ */

export type Client = {
  name: string;
  industry: string;
  note: string;
  logo?: string;
};

export const clients: Client[] = [
  { name: "L Club｜日式酒吧クラブ", industry: "夜間餐飲", note: "短影音行銷導入，客人與招募雙軌成長。" },
  { name: "冒煙的喬", industry: "連鎖餐飲", note: "招牌菜色系列短影音，強化品牌記憶點。" },
  { name: "菲葉室內設計", industry: "室內設計", note: "案例紀錄影片化，讓作品自己說話。" },
  { name: "承毅會計師事務所", industry: "專業服務", note: "知識型短影音，把專業變成可傳播的內容。" },
];

export const testimonials = [
  {
    quote:
      "開始用短影音行銷後，不用額外買廣告～有趣的內容自動傳播，客人、招募都免煩惱！",
    author: "結依媽媽",
    role: "L Club｜日式酒吧クラブ",
  },
] as const;

/* ------------------------------------------------------------------ */
/* 團隊                                                               */
/* ------------------------------------------------------------------ */

export type Member = {
  name: string;
  /** 本名，目前只有負責人在關於我們頁面會顯示 */
  legalName?: string;
  role: string;
  bio: string;
  socials?: string[];
  /** 標記負責人，關於我們頁面用來放大版面呈現 */
  isFounder?: boolean;
  /** 大頭照路徑，沒有的話 UI 上用色塊佔位 */
  photo?: string;
};

export const team: Member[] = [
  {
    name: "子喵",
    legalName: "黃婉怡",
    role: "創辦人",
    bio: "自 2017 年投身自媒體，累積近十年實戰經驗。最大的優勢是快速聽懂品牌方的痛點、精準理解市場需求，把 IP 創立的精髓轉化為可執行的商業策略。",
    socials: ["Facebook", "Instagram", "TikTok", "YouTube"],
    isFounder: true,
    photo: "/brand/founder-zi-miao.png",
  },
  { name: "小傑", role: "資深藏鏡人", bio: "鏡頭後面的那雙眼睛，負責把畫面拍成能留住人的節奏。", socials: ["Instagram"] },
  { name: "威威", role: "資深藏鏡人", bio: "從拍攝到後期，把素材剪成觀眾願意看完的故事。", socials: ["Instagram"] },
];

/* ------------------------------------------------------------------ */
/* 聯絡表單                                                            */
/* ------------------------------------------------------------------ */

export const contactFields = [
  { name: "name", label: "如何稱呼您", type: "text", required: true },
  { name: "lineId", label: "LINE ID", type: "text", required: false },
  { name: "email", label: "電子郵件", type: "email", required: true },
  { name: "industry", label: "您的行業別", type: "text", required: false },
  { name: "message", label: "簡述您的需求，我們將盡快回覆", type: "textarea", required: true },
] as const;
