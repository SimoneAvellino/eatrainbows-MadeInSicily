"use client";
import React from "react";
import type { TableFormat } from "@/lib/data/tables/types";
import { useI18n } from "@/i18n/I18nProvider";

function ShapeSvg({ shape }: { shape: TableFormat["shape"] }) {
  return (
    <svg viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg" className="w-28 h-16 text-current">
      {shape === "square" && <rect x="15" y="10" width="55" height="55" fill="none" stroke="currentColor" strokeWidth="3.5" />}
      {shape === "rectangle" && <rect x="15" y="18" width="90" height="45" fill="none" stroke="currentColor" strokeWidth="3.5" rx="2" />}
      {shape === "circle" && <circle cx="45" cy="40" r="26" fill="none" stroke="currentColor" strokeWidth="3.5" />}
      {shape === "ellipse" && <ellipse cx="60" cy="40" rx="40" ry="24" fill="none" stroke="currentColor" strokeWidth="3.5" />}
    </svg>
  );
}

export default function TableFormatPreview({ format }: { format: TableFormat }) {
  const { t } = useI18n();

  const fromVal = String(format.dimension.from) + " cm";
  const toVal = String(format.dimension.to) + " cm";
  const line1 = t("tables.format.from_to").replace("{from}", fromVal).replace("{to}", toVal);
  const line2 = t("tables.format.thickness_line").replace("{thickness}", String(format.thickness));

  return (
    <div className="flex items-center gap-1 md:gap-2 text-neutral-800">
      <ShapeSvg shape={format.shape} />
      {/* Hide textual details on phones; show only the shape */}
      <p className="hidden md:block font-medium leading-snug">
        <span>{line1}</span>
        <span className="block">{line2}</span>
      </p>
    </div>
  );
}
