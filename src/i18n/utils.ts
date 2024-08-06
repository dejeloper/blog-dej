import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui = defaultLang) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    tags?: Record<string, string>
  ) {
    const translation = ui[lang][key] || ui[defaultLang][key];

    if (!translation) return key;

    return (ui[lang][key] || ui[defaultLang][key]).replace(
      /\{(\w+)\}/g,
      (_, match) => tags?.[match] || ""
    );
  };
}
