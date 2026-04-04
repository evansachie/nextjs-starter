import type { Metadata } from "next";

type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  twitterHandle: string;
};

type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export const siteConfig: SiteConfig = {
  name: "Template Site",
  title: "Template Site | Reusable Landing Page Starter",
  description:
    "Reusable Next.js landing page template with Tailwind and shadcn/ui.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_US",
  twitterHandle: "@example",
};

function absoluteUrl(path?: string) {
  if (!path) return siteConfig.url;
  return new URL(path, siteConfig.url).toString();
}

export function getSeoDefaults(): Metadata {
  const defaultImage = absoluteUrl("/opengraph-image");

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Open Graph image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: siteConfig.twitterHandle,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [defaultImage],
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    },
  };
}

export function createPageMetadata(input: PageMetadataInput): Metadata {
  const title = input.title;
  const description = input.description ?? siteConfig.description;
  const canonical = input.path ?? "/";
  const image = absoluteUrl(input.image ?? "/opengraph-image");

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonical),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} Open Graph image`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
    robots: input.noIndex ? { index: false, follow: false } : undefined,
  };
}