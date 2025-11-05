"use client";
import React from "react";
import type { TablesSection as TablesSectionType } from "@/lib/data/tables/types";
import { useI18n } from "@/i18n/I18nProvider";
import TableEntry from "./TableEntry";

export default function TablesSection({ section }: { section: TablesSectionType }) {
  const { t } = useI18n();

  return (
    <section className="container mx-auto py-10 md:py-16">
      <header className="mb-8 md:mb-12 max-w-3xl">
        <h2 className="font-serif italic text-3xl md:text-4xl text-cobalt mb-3">
          {t(section.titleKey)}
        </h2>
        <p className="text-base md:text-lg opacity-90 whitespace-pre-line">
          {t(section.descKey)}
          {"\n"}
          <span className="italic">{section.quote}</span>
        </p>
      </header>

      <div className="space-y-12 md:space-y-16">
        {section.items.map((item, idx) => (
          <TableEntry key={`${section.slug}-${idx}`} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}
