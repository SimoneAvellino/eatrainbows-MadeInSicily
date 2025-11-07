"use client";
import Image from "next/image";
import React from "react";
import type { TableItem } from "@/lib/data/tables/types";
import { useI18n } from "@/i18n/I18nProvider";
import TableFormatPreview from "./TableFormatPreview";

export default function TableEntry({ item, index }: { item: TableItem; index: number }) {
  const { t, lang } = useI18n();

  const image = (
    <div
      className="relative w-full h-[38dvh] md:h-full overflow-hidden rounded-2xl flex items-center justify-center"
      /* Image scales to fit the half-card height (full height on desktop) without cropping */
    >
      <Image
        src={item.image.src}
        alt={lang === "it" ? item.image.alt_it : item.image.alt_en}
        fill
        className="object-contain object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={index === 0}
        loading={index === 0 ? undefined : "lazy"}
      />
    </div>
  );

  const details = (
    <div className="space-y-3 md:space-y-4 self-center w-full max-w-full md:h-full md:flex md:flex-col md:justify-center">
      <h3 className="font-serif text-2xl md:text-3xl text-cobalt">{item.title}</h3>
      <div className="text-base md:text-lg opacity-90 space-y-2">
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <div><span className="font-bold">{t("tables.field.dimension")}:</span> {item.dimension}</div>
          <div><span className="font-bold">{t("tables.field.weight")}:</span> {item.weight}</div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <div><span className="font-bold">{t("tables.field.thickness")}:</span> {item.thickness}</div>
          <div><span className="font-bold">{t("tables.field.paintingTechnique")}:</span> {t(item.paintingTechniqueKey)}</div>
        </div>
      </div>
      {item.formats?.length ? (
        <div className="pt-2 md:pt-3">
          <div className="block font-semibold mb-2 text-sm md:text-base">{t("tables.field.formats")}</div>
          <div className="grid grid-cols-4 md:grid-cols-2 gap-3 md:gap-5">
            {item.formats.map((f, i) => (
              <TableFormatPreview key={i} format={f} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-3 md:gap-12 items-center md:items-stretch md:h-full">
      {/* Always render image first in DOM so on mobile it appears above the description */}
      <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>{image}</div>
      <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>{details}</div>
    </div>
  );
}
