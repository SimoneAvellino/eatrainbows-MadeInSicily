/** @format */

import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/utils/seo';

const PATHS = [
	'/',
	'/tables',
	'/ceramics',
	'/artists',
	'/products',
	'/contact',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return PATHS.flatMap((path) => {
		const normalized = path === '/' ? '' : path;
		const enUrl = `${SITE_URL}${normalized}`;
		const itUrl = `${SITE_URL}${normalized ? `/it${normalized}` : '/it'}`;

		return [
			{
				url: enUrl,
				lastModified,
				alternates: {
					languages: {
						en: enUrl,
						it: itUrl,
					},
				},
			},
			{
				url: itUrl,
				lastModified,
				alternates: {
					languages: {
						en: enUrl,
						it: itUrl,
					},
				},
			},
		];
	});
}
