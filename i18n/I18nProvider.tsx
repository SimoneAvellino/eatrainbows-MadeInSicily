"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "./locales";
import en from "./dictionaries/en.json";
import it from "./dictionaries/it.json";

const DICTS: Record<Locale, Record<string, string>> = { en, it } as const;

export type I18nContextValue = {
  lang: Locale;
  t: (key: string) => string;
  setLang: (lang: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children, initialLang = "en" as Locale }: { children: React.ReactNode; initialLang?: Locale }) {
  const [lang, setLangState] = useState<Locale>(initialLang);

  useEffect(() => {
    // Read persisted preference
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lang") || document.cookie.match(/(?:^|; )lang=([^;]+)/)?.[1])) as Locale | null;
    if (stored && (stored === "en" || stored === "it")) setLangState(stored);
  }, []);

  const setLang = (l: Locale) => {
    setLangState(l);
    if (typeof document !== "undefined") {
      document.cookie = `lang=${l}; path=/; max-age=${60 * 60 * 24 * 365}`;
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("lang", l);
    }
  };

  const dict = DICTS[lang];
  const t = useMemo(() => (key: string) => dict[key] ?? key, [dict]);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
