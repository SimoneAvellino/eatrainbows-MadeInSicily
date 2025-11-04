export type Locale = 'en' | 'it';

export const locales: Locale[] = ['en', 'it'];
export const defaultLocale: Locale = 'en';

export type Dictionary = Record<string, string>;

// Flattened key paths like 'nav.home', 'hero.titleLine1'
