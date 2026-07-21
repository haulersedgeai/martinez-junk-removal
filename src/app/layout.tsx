import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { business } from "@/lib/business";
import { allReviews } from "@/lib/reviews";
import { marioOwnerImages } from "@/lib/images";

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
    default: "Dumpster Rental in Chino, CA | Martinez Junk Removal",
    template: "%s | Martinez Junk Removal",
  },
  description:
    "Roll-off dumpster rental serving Chino and the Inland Empire — LA, Orange, San Bernardino & Riverside counties. Same-day dumpster rental, upfront pricing. Se habla español. Call or text (562) 639-5747.",
  keywords: [
    "dumpster rental Chino",
    "roll off dumpster Inland Empire",
    "concrete dumpster rental",
    "same day dumpster rental",
    "Martinez Junk Removal",
    "Martinez Dumpsters",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: business.displayName,
    title: "Dumpster Rental in Chino, CA | Martinez Junk Removal",
    description:
      "Clean bins, upfront pricing, on-time drop-off & pickup, and same-day availability across LA, Orange, San Bernardino & Riverside counties.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dumpster Rental in Chino, CA | Martinez Junk Removal",
    description:
      "Clean bins, upfront pricing, on-time drop-off & pickup, and same-day availability across LA, Orange, San Bernardino & Riverside counties.",
  },
  // favicon.ico, icon.png, apple-icon.png, and opengraph-image.jpg in
  // src/app/ are Next.js file-convention metadata — no explicit icons/images
  // fields needed here.
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
    url: siteUrl,
    telephone: business.phoneTel,
    email: business.email,
    foundingDate: business.foundingDate,
    founder: {
      "@type": "Person",
      name: business.owner,
      image: `${siteUrl}${marioOwnerImages.solo.path}`,
    },
    image: [`${siteUrl}${marioOwnerImages.solo.path}`, `${siteUrl}${marioOwnerImages.withCrew.path}`],
    priceRange: "$$",
    paymentAccepted: business.payments,
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "06:00",
      closes: "17:00",
    },
    // Tied to the Google figure to stay within schema norms — the "110
    // combined" figure is on-page marketing display only, not structured data.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.googleRating.value,
      reviewCount: business.googleRating.count,
    },
    review: allReviews.slice(0, 6).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
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
