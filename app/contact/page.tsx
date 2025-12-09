/** @format */

import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import en from '@/i18n/dictionaries/en.json';
import it from '@/i18n/dictionaries/it.json';
import ContactForm from '@/components/ContactForm';
import ContactHeading from '@/components/ContactHeading';
import { buildPageMetadata } from '@/lib/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
	const cookieStore = await cookies();
	const lang = cookieStore.get('lang')?.value === 'it' ? 'it' : 'en';
	const dict = lang === 'it' ? it : en;
	return buildPageMetadata({
		lang,
		title: dict['meta.contact.title'],
		description: dict['meta.contact.description'],
		path: '/contact',
		imagePath: '/assets/images/hero_sicily.webp',
	});
}

export default async function ContactPage() {
	return (
		<section className='container mx-auto py-12 pt-44 md:pt-56'>
			<ContactHeading />
			<ContactForm showForm={false} />
		</section>
	);
}
