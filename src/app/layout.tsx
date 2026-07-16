import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { business, reviews } from "@/lib/business";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://martinezjunkremoval.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Junk Removal & Dumpster Rental in Chino, CA | Martinez Junk Removal",
    template: "%s | Martinez Junk Removal",
  },
  description:
    "Flat-rate junk removal and roll-off dumpster rental serving Chino and the Inland Empire — LA, Orange, San Bernardino & Riverside counties. Same-day service. Se habla español. Call or text (562) 639-5747.",
  keywords: [
    "junk removal Chino",
    "dumpster rental Chino",
    "junk removal Inland Empire",
    "roll off dumpster rental",
    "Martinez Junk Removal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: business.name,
    title: "Junk Removal & Dumpster Rental in Chino, CA | Martinez Junk Removal",
    description:
      "Fast, friendly, flat-rate hauling for homes and businesses across LA, Orange, San Bernardino & Riverside counties. Same-day service available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal & Dumpster Rental in Chino, CA | Martinez Junk Removal",
    description:
      "Fast, friendly, flat-rate hauling for homes and businesses across LA, Orange, San Bernardino & Riverside counties.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#196e3e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    legalName: business.legalName,
    alternateName: business.formerName,
    url: siteUrl,
    telephone: business.phoneTel,
    email: business.email,
    foundingDate: business.foundingDate,
    priceRange: "$$",
    knowsLanguage: ["en", "es"],
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: "US",
    },
    areaServed: business.serviceCounties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    sameAs: [business.socials.facebook, business.socials.instagram, business.socials.yelp],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
    },
    review: reviews.slice(0, 6).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-900">
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
