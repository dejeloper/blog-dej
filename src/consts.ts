export const SITE_METADATA = {
  theme: "system",
  language: "es",
  robots: "index, follow",
};

export const siteUrl = "https://blog-dej.vercel.app/";

export const ITEMS_PER_PAGE = 5;

export const NAVIGATION = [
  { href: "/", title: "nav.home" },
  { href: "/blog", title: "nav.blog" },
  { href: "/tags", title: "nav.tags" },
  { href: "/about", title: "nav.about" },
] as const;

export const POST_METADATA = {
  defaultLayout: "column",
  showFullWidthCover: false,
  showCover: true,
  showTags: true,
  showDate: true,
  showSummary: true,
  showAuthors: true,
  showRelatedPosts: true,
  showTableOfContents: true,
  showShareButtons: "both",
};
