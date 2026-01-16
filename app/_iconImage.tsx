/** @format */

import React from 'react';

export function IconImage({
	size,
	variant,
}: {
	size: number;
	variant?: 'default' | 'apple';
}) {
	const showSubtitle = size >= 96;
	const borderRadius = Math.round(size * 0.2);
	const fontMain = Math.round(size * 0.44);
	const fontSub = Math.max(10, Math.round(size * 0.12));

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background:
					'linear-gradient(135deg, #03267e 0%, #0b55c6 45%, #f2c94c 100%)',
			}}
		>
			<div
				style={{
					width: '86%',
					height: '86%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius,
					background: 'rgba(255, 255, 255, 0.10)',
					border: '2px solid rgba(255, 255, 255, 0.30)',
					boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
				}}
			>
				<div
					style={{
						fontSize: fontMain,
						fontWeight: 900,
						color: '#ffffff',
						letterSpacing: -2,
						lineHeight: 1,
					}}
				>
					MIS
				</div>
				{showSubtitle ? (
					<div
						style={{
							marginTop: Math.round(size * 0.04),
							fontSize: fontSub,
							fontWeight: 700,
							color: 'rgba(255,255,255,0.92)',
							letterSpacing: 0.5,
							textTransform: 'uppercase',
						}}
					>
						{variant === 'apple' ? 'Made in Sicily' : 'Taormina'}
					</div>
				) : null}
			</div>
		</div>
	);
}
