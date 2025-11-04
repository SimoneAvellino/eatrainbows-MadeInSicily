"use client";
import type { ReactElement } from "react";
import Image from "next/image";
import { tables } from "@/lib/data/tables";
import { useI18n } from "@/i18n/I18nProvider";

function ImageCard({ src, alt, width, height, priority }: { src: string; alt: string; width: number; height: number; priority?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-subtle">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}

function TextCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl text-cobalt mb-3">{name}</h2>
      <p className="text-base md:text-lg opacity-80 leading-relaxed whitespace-pre-line">{desc}</p>
    </div>
  );
}

export default function TablesClient() {
  const { lang } = useI18n();

  // Build independent left/right columns so items flow vertically per column
  const leftColumn: ReactElement[] = [];
  const rightColumn: ReactElement[] = [];

  tables.forEach((p, i) => {
    const imageEl = (
      <ImageCard key={`img-${p.slug}-${i}`} src={p.src} alt={lang === "it" ? p.alt_it : p.alt_en} width={p.width} height={p.height} priority={i === 0} />
    );
    const textEl = <TextCard key={`txt-${p.slug}-${i}`} name={lang === "it" ? p.name_it : p.name_en} desc={lang === "it" ? p.desc_it : p.desc_en} />;

    if (i % 2 === 0) {
      // Even: image left, text right
      leftColumn.push(imageEl);
      rightColumn.push(textEl);
    } else {
      // Odd: text left, image right
      leftColumn.push(textEl);
      rightColumn.push(imageEl);
    }
  });

  return (
    <div>
      {/* Desktop / tablet: two independent vertical columns */}
      <div className="hidden md:grid grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col gap-12">{leftColumn}</div>
        <div className="flex flex-col gap-12">{rightColumn}</div>
      </div>

      {/* Mobile: interleave per product for readability */}
      <div className="md:hidden space-y-10">
        {tables.map((p, i) => (
          <div key={`m-${p.slug}-${i}`} className="space-y-4">
            <ImageCard src={p.src} alt={lang === "it" ? p.alt_it : p.alt_en} width={p.width} height={p.height} priority={i === 0} />
            <TextCard name={lang === "it" ? p.name_it : p.name_en} desc={lang === "it" ? p.desc_it : p.desc_en} />
          </div>
        ))}
      </div>
    </div>
  );
}
