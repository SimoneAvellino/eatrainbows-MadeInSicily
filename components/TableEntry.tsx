"use client";
import Image from "next/image";
import React from "react";
import type { TableItem } from "@/lib/data/tables/types";
import { useI18n } from "@/i18n/I18nProvider";
import TableFormatPreview from "./TableFormatPreview";

export default function TableEntry({ item, index }: { item: TableItem; index: number }) {
  const { t, lang } = useI18n();

  const image = (
    <div className="relative w-full max-w-full overflow-hidden md:overflow-visible">
      <Image
        src={item.image.src}
        alt={lang === "it" ? item.image.alt_it : item.image.alt_en}
        width={item.image.width}
        height={item.image.height}
        className="w-full h-auto object-contain"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  const details = (
    <div className="space-y-4 self-center w-full max-w-full">
      <h3 className="font-serif text-2xl md:text-3xl text-cobalt">{item.title}</h3>
      <div className="text-base md:text-lg opacity-90 space-y-2">
        <div className="grid grid-cols-2 gap-3">
          <div><span className="font-bold">{t("tables.field.dimension")}:</span> {item.dimension}</div>
          <div><span className="font-bold">{t("tables.field.weight")}:</span> {item.weight}</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div><span className="font-bold">{t("tables.field.thickness")}:</span> {item.thickness}</div>
          <div><span className="font-bold">{t("tables.field.paintingTechnique")}:</span> {t(item.paintingTechniqueKey)}</div>
        </div>
      </div>
      {item.formats?.length ? (
        <div className="pt-3">
          <div className="font-semibold mb-2">{t("tables.field.formats")}</div>
          <div className="grid grid-cols-2 gap-5">
            {item.formats.map((f, i) => (
              <TableFormatPreview key={i} format={f} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
      {/* Always render image first in DOM so on mobile it appears above the description */}
      <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>{image}</div>
      <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>{details}</div>
    </div>
  );
}
