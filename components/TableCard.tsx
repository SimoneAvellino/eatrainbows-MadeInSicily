"use client";
import React from "react";

type Props = {
	index: number;
	isLast?: boolean;
	children: React.ReactNode;
};

/**
 * TableCard: sticky, overlapping card wrapper for per-table stacking.
 * - No shadows (uses ring + translucent background for separation)
 * - Later cards sit above earlier ones (higher z-index)
 * - Active card stays vertically centered while scrolling
 */
export default function TableCard({ index, isLast = false, children }: Props) {
	const z = isLast ? 300 : 100 + index;
	const isFirst = index === 0;

	return (
		<section
			style={{ zIndex: z, backfaceVisibility: "hidden" }}
			className={[
				"sticky",
						"top-24 md:top-1/2 md:-translate-y-1/2",
				"rounded-3xl ring-1 ring-porcelain/60 bg-white md:bg-white/70 overflow-hidden md:backdrop-blur-md",
				"min-h-[80dvh] md:min-h-[75dvh]",
				"transform-gpu will-change-transform",
						"px-4 py-6 md:px-8 md:py-10",
						isFirst ? "mt-0" : "mt-6 md:mt-16",
			].join(" ")}
		>
			{children}
		</section>
	);
}
