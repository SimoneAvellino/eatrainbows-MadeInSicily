/** @format */

import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { I18nProvider } from '@/i18n/I18nProvider';
import { localSerif, localSans } from '@/app/fonts';
import { cookies } from 'next/headers';
import { SITE_NAME, SITE_URL, OG_LOCALE } from '@/lib/utils/seo';
// To switch to a different local serif font:
// 1) Drop your font files into /public/fonts/
// 2) Use the template in app/fonts.ts to configure next/font/local
// 3) Import { localSerif } from "@/app/fonts" and use its CSS variable on the <html> element
// import { localSerif } from "@/app/fonts";

export async function generateMetadata(): Promise<Metadata> {
	const cookieStore = await cookies();
	const cookieLang = cookieStore.get('lang')?.value === 'it' ? 'it' : 'en';
	const currentOg = OG_LOCALE[cookieLang];
	const alternateOg = cookieLang === 'en' ? [OG_LOCALE.it] : [OG_LOCALE.en];

	return {
		metadataBase: new URL(SITE_URL),
		title: SITE_NAME,
		description:
			'Artisan lava-stone tables and hand-painted ceramics from Taormina, Sicily. Maiolica-inspired, colorful, and timeless.',
		openGraph: {
			title: SITE_NAME,
			description:
				'Artisan lava-stone tables and hand-painted ceramics from Taormina, Sicily.',
			url: SITE_URL,
			siteName: SITE_NAME,
			images: [
				{
					url: '/assets/images/hero_sicily.webp',
					width: 1200,
					height: 630,
					alt: 'Taormina coastal view',
				},
			],
			locale: currentOg,
			alternateLocale: alternateOg,
			type: 'website',
		},
		alternates: { canonical: '/' },
		icons: {
			icon: [
				{ url: '/favicon.ico' },
				{
					url: '/favicon-48x48.png',
					sizes: '48x48',
					type: 'image/png',
				},
				{ url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
				{ url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
			],
			apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
		},
		manifest: '/manifest.webmanifest',
	} satisfies Metadata;
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const cookieLang = cookieStore.get('lang')?.value;
	const initialLang = cookieLang === 'it' ? 'it' : 'en';
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: SITE_NAME,
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Via Calapitrulli, 5',
			addressLocality: 'Taormina',
			addressRegion: 'ME',
			postalCode: '98039',
			addressCountry: 'IT',
		},
		url: SITE_URL,
		telephone: '+39 347 609 7090',
		email: 'madeinsicilyinfo@gmail.com',
		image: [`${SITE_URL}/assets/images/hero_sicily.webp`],
		sameAs: [
			'https://www.instagram.com/made_in_sicily_taormina/',
			'https://www.facebook.com/madeinsicilytaormina',
		],
	};

	return (
		// Apply local serif (titles) and local sans (Poiret One) for body text
		<html
			lang={initialLang}
			className={`${localSerif.variable} ${localSans.variable}`}
		>
			<body className='font-sans min-h-screen flex flex-col'>
				<I18nProvider initialLang={initialLang as 'en' | 'it'}>
					<Header />
					<main className='flex-1'>{children}</main>
					<Footer />
				</I18nProvider>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</body>
		</html>
	);
}
