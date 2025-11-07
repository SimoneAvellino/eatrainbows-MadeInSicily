"use client";
import React, { useEffect, useRef, useState } from "react";
import type { TablesSection as TablesSectionType } from "@/lib/data/tables/types";
import { useI18n } from "@/i18n/I18nProvider";
import TableEntry from "./TableEntry";
import TableCard from "./TableCard";

export default function TablesSection({ section }: { section: TablesSectionType }) {
  const { t } = useI18n();
  const titleRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);
  const [titlePinned, setTitlePinned] = useState(true);

  // Dynamically release title before overlapping the final card: we compute title height + an offset.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const endEl = endRef.current;
    const titleEl = titleRef.current;
    if (!endEl || !titleEl) return;

    const computeMargin = () => {
      const h = titleEl.getBoundingClientRect().height;
      // We release a bit earlier than exact height (add +12px safety) so it never sits over the last card.
      return -(h + 12);
    };

    let currentMargin = computeMargin();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitlePinned(false); // switch to relative so it scrolls up with last card
        } else {
          setTitlePinned(true);
        }
      },
      {
        root: null,
        rootMargin: `${currentMargin}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    observer.observe(endEl);

    // Recompute on resize (title font-size may change)
    const ro = new ResizeObserver(() => {
      const newMargin = computeMargin();
      if (newMargin === currentMargin) return;
      currentMargin = newMargin;
      observer.disconnect();
      const newObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTitlePinned(false);
          } else {
            setTitlePinned(true);
          }
        },
        {
          root: null,
          rootMargin: `${currentMargin}px 0px 0px 0px`,
          threshold: 0,
        }
      );
      newObserver.observe(endEl);
    });
    ro.observe(titleEl);

    return () => {
      observer.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <section className="container mx-auto relative isolate py-10 md:py-16 md:-mb-[22dvh]">
      {/* Sticky section title: stays on top; when the section end reaches it, title scrolls up with content */}
      <div ref={titleRef} className={`sticky top-3 md:top-4 z-40 pointer-events-none ${titlePinned ? '' : 'translate-y-0'} transition-[position]`} style={{ position: titlePinned ? ("sticky" as const) : ("relative" as const) }}>
        <div className="pointer-events-auto inline-block px-3 py-1.5">
          <h2 className="font-serif italic text-3xl md:text-4xl text-cobalt leading-none">
            {t(section.titleKey)}
          </h2>
        </div>
      </div>

      {/* Non-sticky description: scrolls away so title remains alone on top */}
      <div className="mb-8 md:mb-12 max-w-3xl">
        <p className="text-base md:text-lg opacity-90 whitespace-pre-line">
          {t(section.descKey)}
          {"\n"}
          <span className="italic">{section.quote}</span>
        </p>
      </div>

      {/* Stacked table cards */}
      <div className="relative isolate">
        {/* Spacer to let the first sticky card glide under the title */}
        <div className="h-[30dvh] md:h-[34dvh]" aria-hidden="true" />
        {section.items.map((item, idx) => (
          <TableCard key={`${section.slug}-${idx}`} index={idx} isLast={idx === section.items.length - 1}>
            <TableEntry item={item} index={idx} />
          </TableCard>
        ))}
        {/* End sentinel: when it hits the top, we unpin the sticky title */}
        <div ref={endRef} className="h-8 md:h-6" aria-hidden="true" />
      </div>
    </section>
  );
}
