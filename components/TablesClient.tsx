"use client";
import React, { useMemo, useState } from "react";
import { tableSections } from "@/lib/data/tables/index";
import type { TablesSection as TablesSectionType, Shape } from "@/lib/data/tables/types";
import TablesSection from "./TablesSection";
import { useI18n } from "@/i18n/I18nProvider";

export default function TablesClient() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<string>("all");
  const [shape, setShape] = useState<"all" | Shape>("all");

  const options = useMemo(() => {
    return [
      { value: "all", label: t("tables.filter.all") },
      ...tableSections.map((s) => ({ value: s.slug, label: t(s.titleKey) })),
    ];
  }, [t]);

  const baseSections: TablesSectionType[] = useMemo(() => {
    if (selected === "all") return tableSections as TablesSectionType[];
    const s = tableSections.find((x) => x.slug === selected);
    return s ? [s] : ([] as TablesSectionType[]);
  }, [selected]);

  const sectionsToRender: TablesSectionType[] = useMemo(() => {
    if (shape === "all") return baseSections;
    const filtered = baseSections
      .map((section) => {
        const items = section.items
          .map((item) => {
            const formats = (item.formats || []).filter((f) => f.shape === shape);
            return { ...item, formats };
          })
          .filter((it) => (it.formats?.length ?? 0) > 0);
        return { ...section, items } as TablesSectionType;
      })
      .filter((s) => s.items.length > 0);
    return filtered;
  }, [baseSections, shape]);

  return (
    <div className="space-y-10 md:space-y-16">
      {/* Filter */}
      <div className="grid grid-cols-2 gap-2 items-center md:flex md:flex-wrap md:items-center md:justify-end md:gap-4">
        {/* Category filter */}
        <div className="flex items-center gap-1 md:gap-2">
          <label className="hidden md:inline text-xs md:text-sm font-medium" htmlFor="tables-filter">
            {t("tables.filter.label")}
          </label>
          <div className="relative w-full">
            <select
              id="tables-filter"
              aria-label={t("tables.filter.label")}
              className="w-full appearance-none bg-transparent border-0 border-b-2 border-cobalt text-cobalt px-1 pr-7 py-1 text-sm md:text-base focus:outline-none focus:border-cobalt"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-cobalt" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </div>

        {/* Shape filter */}
        <div className="flex items-center gap-1 md:gap-2">
          <label className="hidden md:inline text-xs md:text-sm font-medium" htmlFor="tables-shape">
            {t("tables.filter.shape")}
          </label>
          <div className="relative w-full">
            <select
              id="tables-shape"
              aria-label={t("tables.filter.shape")}
              className="w-full appearance-none bg-transparent border-0 border-b-2 border-cobalt text-cobalt px-1 pr-7 py-1 text-sm md:text-base focus:outline-none focus:border-cobalt"
              value={shape}
              onChange={(e) => setShape(e.target.value as any)}
            >
              <option value="all">{t("tables.filter.shapeAll")}</option>
              <option value="circle">{t("tables.shape.circle")}</option>
              <option value="ellipse">{t("tables.shape.ellipse")}</option>
              <option value="square">{t("tables.shape.square")}</option>
              <option value="rectangle">{t("tables.shape.rectangle")}</option>
            </select>
            <svg className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-cobalt" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-16 md:space-y-24">
        {sectionsToRender.map((section: TablesSectionType) => (
          <TablesSection key={section.slug} section={section} />
        ))}
      </div>
    </div>
  );
}
