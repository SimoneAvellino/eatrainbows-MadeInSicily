/** @format */

import { essenzeSiciliane } from './essenze_siciliane';
import { colateLaviche } from './colate_laviche';
import { goldenEtna } from './golden_etna';
import { novit } from './novit';
export * from './types';

export const tableSections = [
	// Add more sections here as the catalog grows
	// Order controls rendering order on the page
	// e.g., colate_laviche, golden_etna, etc.
	essenzeSiciliane,
	colateLaviche,
	goldenEtna,
	novit,
];

export { essenzeSiciliane, colateLaviche, goldenEtna, novit };
