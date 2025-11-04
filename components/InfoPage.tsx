"use client";
import { useI18n } from "@/i18n/I18nProvider";

export default function InfoPage({ titleKey, descKey }: { titleKey: string; descKey: string }) {
  const { t } = useI18n();
  return (
    <section className="container mx-auto py-12 pt-44 md:pt-56">
      <h1 className="font-serif text-3xl md:text-4xl text-cobalt mb-6">{t(titleKey)}</h1>
      <div className="text-base md:text-lg opacity-80 leading-relaxed whitespace-pre-line">{t(descKey)}</div>
    </section>
  );
}
