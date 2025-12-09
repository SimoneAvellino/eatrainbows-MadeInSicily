/** @format */

import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import en from '@/i18n/dictionaries/en.json';
import it from '@/i18n/dictionaries/it.json';
import InfoPage from '@/components/InfoPage';
import { buildPageMetadata } from '@/lib/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
	const cookieStore = await cookies();
	const lang = cookieStore.get('lang')?.value === 'it' ? 'it' : 'en';
	const dict = lang === 'it' ? it : en;
	return buildPageMetadata({
		lang,
		title: dict['meta.artists.title'],
		description: dict['meta.artists.description'],
		path: '/artists',
		imagePath: '/assets/images/hero_sicily.webp',
	});
}

export default function ArtistsPage() {
	return (
		<InfoPage
			titleKey='nav.artists'
			descKey='collage.artistsDesc'
		/>
	);
}
