"use client";
import React from "react";
import type { TablesSection as TablesSectionType } from "@/lib/data/tables/types";
import { useI18n } from "@/i18n/I18nProvider";
import TableEntry from "./TableEntry";
import TableCard from "./TableCard";

export default function TablesSection({ section }: { section: TablesSectionType }) {
  const { t } = useI18n();

  return (
    <section className="container mx-auto relative isolate py-10 md:py-16">
      <div className="mb-4 md:mb-6 h-8 md:h-12 flex items-end w-full">
        <h2 className="font-serif italic text-3xl md:text-4xl text-cobalt leading-none">
          {t(section.titleKey)}
        </h2>
      </div>

      <div className="mb-8 md:mb-12 max-w-3xl">
        <p className="text-base md:text-lg opacity-90 whitespace-pre-line">
          {t(section.descKey)}
          {"\n"}
          <span className="italic">{section.quote}</span>
        </p>
      </div>

      {/* Stacked table cards */}
      <div className="relative isolate">
  <div className="h-[30dvh] md:h-[38dvh]" aria-hidden="true" />
        {section.items.map((item, idx) => (
          <TableCard key={`${section.slug}-${idx}`} index={idx} isLast={idx === section.items.length - 1}>
            <TableEntry item={item} index={idx} />
          </TableCard>
        ))}
        <div className="h-24 md:h-32" aria-hidden="true" />
      </div>
    </section>
  );
}
