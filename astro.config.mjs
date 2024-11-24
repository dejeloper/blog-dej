import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import { SITE_METADATA } from "./src/consts.ts";
import metaTags from "astro-meta-tags";

import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

import robotsTxt from "astro-robots-txt";

export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    solidJs(),
    metaTags(),
    robotsTxt(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
