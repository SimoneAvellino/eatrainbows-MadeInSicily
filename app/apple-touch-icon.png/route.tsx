/** @format */

import { ImageResponse } from 'next/og';
import { IconImage } from '@/app/_iconImage';

export const runtime = 'edge';

export function GET() {
	const size = 180;
	return new ImageResponse(
		(
			<IconImage
				size={size}
				variant='apple'
			/>
		),
		{
			width: size,
			height: size,
		}
	);
}
