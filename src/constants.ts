export const SITE = {
  name: "psdcoder.dev",
  url: "https://psdcoder.dev",
  author: "Pavel Grinchenko",
  role: "Frontend",
  company: "Evil Martians",
  companyUrl: "https://evilmartians.com",
  location: "Lisbon",
  locale: "en_US",
  lang: "en",
  themeColorLight: "#f2ecde",
  themeColorDark: "#1c1a17",
} as const;

export const META = {
  title: "psdcoder.dev",
  description:
    "Pavel Grinchenko — senior frontend engineer at Evil Martians. Design systems, dense interfaces, local-first apps.",
  ogImage: "/og.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "psdcoder.dev — Pavel Grinchenko, senior frontend engineer",
} as const;

export const TWITTER_HANDLE = "@psd_coder";

export const SOCIALS = {
  github: "https://github.com/psd-coder",
  twitter: `https://x.com/${TWITTER_HANDLE.slice(1)}`,
  linkedin: "https://linkedin.com/in/psdcoder",
} as const;
