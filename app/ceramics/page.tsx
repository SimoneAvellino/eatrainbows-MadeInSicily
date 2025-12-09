/** @format */

import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import en from '@/i18n/dictionaries/en.json';
import it from '@/i18n/dictionaries/it.json';
import InfoPage from '@/components/InfoPage';
import CeramicsClient from '@/components/CeramicsClient';
import { buildPageMetadata } from '@/lib/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
	const cookieStore = await cookies();
	const lang = cookieStore.get('lang')?.value === 'it' ? 'it' : 'en';
	const dict = lang === 'it' ? it : en;
	return buildPageMetadata({
		lang,
		title: dict['meta.ceramics.title'],
		description: dict['meta.ceramics.description'],
		path: '/ceramics',
		imagePath: '/assets/images/hero_sicily.webp',
	});
}

export default function CeramicsPage() {
	return (
		<>
			{/* Keep the current description on top of the page */}
			<InfoPage
				titleKey='nav.ceramics'
				descKey='collage.ceramicsDesc'
			/>
			{/* Product-style listing of ceramics */}
			<section className='container mx-auto pb-16'>
				<CeramicsClient />
			</section>
		</>
	);
}
