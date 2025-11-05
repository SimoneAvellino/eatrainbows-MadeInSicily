import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/i18n/I18nProvider";
import { localSerif, localSans } from "@/app/fonts";
import { cookies } from "next/headers";
// To switch to a different local serif font:
// 1) Drop your font files into /public/fonts/
// 2) Use the template in app/fonts.ts to configure next/font/local
// 3) Import { localSerif } from "@/app/fonts" and use its CSS variable on the <html> element
// import { localSerif } from "@/app/fonts";

const siteUrl = "https://example.com";

const OG_LOCALE: Record<"en" | "it", string> = { en: "en_US", it: "it_IT" };

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value === "it" ? "it" : "en";
  const currentOg = OG_LOCALE[cookieLang];
  const alternateOg = cookieLang === "en" ? [OG_LOCALE.it] : [OG_LOCALE.en];

  return {
    metadataBase: new URL(siteUrl),
    title: "Taormina – Lava Stone & Ceramics",
    description:
      "Artisan lava-stone tables and hand-painted ceramics from Taormina, Sicily. Maiolica-inspired, colorful, and timeless.",
    openGraph: {
      title: "Taormina – Lava Stone & Ceramics",
      description:
        "Artisan lava-stone tables and hand-painted ceramics from Taormina, Sicily.",
      url: siteUrl,
      siteName: "Taormina – Lava Stone & Ceramics",
      images: [
        { url: "/assets/images/hero_sicily.webp", width: 1200, height: 630, alt: "Taormina coastal view" },
      ],
      locale: currentOg,
      alternateLocale: alternateOg,
      type: "website",
    },
    alternates: { canonical: "/" },
  } satisfies Metadata;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  const initialLang = cookieLang === "it" ? "it" : "en";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Taormina – Lava Stone & Ceramics",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Teatro Greco, 1",
      addressLocality: "Taormina",
      addressRegion: "ME",
      postalCode: "98039",
      addressCountry: "IT",
    },
    url: siteUrl,
    telephone: "+39 347 609 7090",
    email: "madeinsicilyinfo@gmail.com",
    image: [
      `${siteUrl}/assets/images/hero_sicily.webp`
    ],
    sameAs: ["https://instagram.com/", "https://facebook.com/"],
  };

  return (
    // Apply local serif (titles) and local sans (Poiret One) for body text
    <html lang={initialLang} className={`${localSerif.variable} ${localSans.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <I18nProvider initialLang={initialLang as "en" | "it"}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
