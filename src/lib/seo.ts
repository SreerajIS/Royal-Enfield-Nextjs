import { NextSeoProps } from 'next-seo';

export const defaultSEO: NextSeoProps = {
  title: 'Next.js SEO App',
  description: 'A modern Next.js application with SEO optimization',
  canonical: 'https://your-domain.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Next.js SEO App',
    title: 'Next.js SEO App',
    description: 'A modern Next.js application with SEO optimization',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js SEO App',
      },
    ],
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yoursite',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export function generatePageSEO(
  title: string,
  description: string,
  path: string = ''
): NextSeoProps {
  return {
    ...defaultSEO,
    title,
    description,
    canonical: `https://your-domain.com${path}`,
    openGraph: {
      ...defaultSEO.openGraph,
      title,
      description,
      url: `https://your-domain.com${path}`,
    },
  };
}