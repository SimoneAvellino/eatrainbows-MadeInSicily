/** @format */

import { ImageResponse } from 'next/og';
import { IconImage } from '@/app/_iconImage';

export const runtime = 'edge';

export function GET() {
	const size = 192;
	return new ImageResponse(<IconImage size={size} />, {
		width: size,
		height: size,
	});
}
