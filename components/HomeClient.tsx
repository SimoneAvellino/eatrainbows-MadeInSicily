"use client";
import { motion } from "framer-motion";
import Collage from "@/components/Collage";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useI18n } from "@/i18n/I18nProvider";

export default function HomeClient() {
  const { t } = useI18n();
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[100svh] hero-bg"
        aria-label="Hero background: Sicily coastal view"
      >
        {/* Dark overlay for better contrast */}
  <div className="absolute inset-0 bg-black/50 md:bg-black/60 pointer-events-none z-0" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 max-w-xl z-10"
        >
          <h1 className="font-serif italic tracking-wide md:tracking-wider text-4xl md:text-6xl lg:text-7xl text-porcelain drop-shadow">
            {t("hero.titleLine1")}
            <span className="block font-sans not-italic font-light text-lg md:text-2xl lg:text-3xl mt-2">
              {t("hero.titleLine2")}
            </span>
          </h1>
        </motion.div>
        <ScrollIndicator />
      </section>

      {/* Collage */}
      <Collage />
    </div>
  );
}
