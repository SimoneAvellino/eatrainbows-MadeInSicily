/** @format */

import type { Metadata } from 'next';

export const SITE_NAME = 'Taormina – Lava Stone & Ceramics';
export const SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.madeinsicily.com';
export const OG_LOCALE: Record<'en' | 'it', string> = {
	en: 'en_US',
	it: 'it_IT',
};

function cleanPath(path: string) {
	return path.startsWith('/') ? path : `/${path}`;
}

export function localizedUrl(path: string, lang: 'en' | 'it') {
	const p = cleanPath(path);
	return lang === 'en'
		? `${SITE_URL}${p}`
		: `${SITE_URL}${p === '/' ? '/it' : `/it${p}`}`;
}

export function alternates(path: string, lang: 'en' | 'it') {
	const p = cleanPath(path);
	const enUrl = `${SITE_URL}${p}`;
	const itUrl = `${SITE_URL}${p === '/' ? '/it' : `/it${p}`}`;
	const canonical = lang === 'en' ? enUrl : itUrl;
	return {
		canonical,
		languages: {
			en: enUrl,
			it: itUrl,
			'x-default': enUrl,
		},
	};
}

export function absoluteOgImage(path = '/assets/images/hero_sicily.webp') {
	return path.startsWith('http') ? path : `${SITE_URL}${cleanPath(path)}`;
}

export function buildPageMetadata(options: {
	lang: 'en' | 'it';
	title: string;
	description: string;
	path: string;
	imagePath?: string;
}): Metadata {
	const { lang, title, description, path, imagePath } = options;
	const url = localizedUrl(path, lang);
	const alternateLocale = lang === 'en' ? [OG_LOCALE.it] : [OG_LOCALE.en];
	return {
		title,
		description,
		alternates: alternates(path, lang),
		openGraph: {
			title,
			description,
			url,
			siteName: SITE_NAME,
			images: [
				{
					url: absoluteOgImage(imagePath),
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			locale: OG_LOCALE[lang],
			alternateLocale,
			type: 'website',
		},
	} satisfies Metadata;
}
