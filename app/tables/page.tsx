/** @format */

import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import en from '@/i18n/dictionaries/en.json';
import it from '@/i18n/dictionaries/it.json';
import TablesClient from '@/components/TablesClient';
import { buildPageMetadata } from '@/lib/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
	const cookieStore = await cookies();
	const lang = cookieStore.get('lang')?.value === 'it' ? 'it' : 'en';
	const dict = lang === 'it' ? it : en;
	return buildPageMetadata({
		lang,
		title: dict['meta.tables.title'],
		description: dict['meta.tables.description'],
		path: '/tables',
		imagePath: '/assets/images/hero_sicily.webp',
	});
}

export default function TablesPage() {
	return (
		<>
			{/* Space from fixed header so content isn't hidden */}
			<section className='container mx-auto pb-16 pt-32 md:pt-44'>
				<TablesClient />
			</section>
		</>
	);
}
