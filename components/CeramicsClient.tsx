"use client";
import type { ReactElement } from "react";
import Image from "next/image";
import { ceramics } from "@/lib/data/ceramics";
import { useI18n } from "@/i18n/I18nProvider";

function ImageCard({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-subtle">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
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

export default function CeramicsClient() {
  const { lang } = useI18n();

  const leftColumn: ReactElement[] = [];
  const rightColumn: ReactElement[] = [];

  ceramics.forEach((p, i) => {
    const imageEl = (
      <ImageCard key={`img-${p.slug}-${i}`} src={p.src} alt={lang === "it" ? p.alt_it : p.alt_en} width={p.width} height={p.height} />
    );
    const textEl = <TextCard key={`txt-${p.slug}-${i}`} name={lang === "it" ? p.name_it : p.name_en} desc={lang === "it" ? p.desc_it : p.desc_en} />;

    if (i % 2 === 0) {
      leftColumn.push(imageEl);
      rightColumn.push(textEl);
    } else {
      leftColumn.push(textEl);
      rightColumn.push(imageEl);
    }
  });

  return (
    <div>
      <div className="hidden md:grid grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col gap-12">{leftColumn}</div>
        <div className="flex flex-col gap-12">{rightColumn}</div>
      </div>

      <div className="md:hidden space-y-10">
        {ceramics.map((p, i) => (
          <div key={`m-${p.slug}-${i}`} className="space-y-4">
            <ImageCard src={p.src} alt={lang === "it" ? p.alt_it : p.alt_en} width={p.width} height={p.height} />
            <TextCard name={lang === "it" ? p.name_it : p.name_en} desc={lang === "it" ? p.desc_it : p.desc_en} />
          </div>
        ))}
      </div>
    </div>
  );
}
