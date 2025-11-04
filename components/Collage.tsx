"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.6 } }),
};

export default function Collage() {
  const { t } = useI18n();
  const items = [
    {
      src: "/assets/images/tables/3.jpg",
      alt: "Tavolo in pietra lavica dipinto a mano / Hand-painted lava-stone table",
      titleKey: "collage.tablesTitle",
      descKey: "collage.tablesDesc",
      href: "/tables",
    },
    {
      src: "/assets/images/ceramics/2.jpg",
      alt: "Ceramica siciliana dipinta a mano / Hand-painted Sicilian ceramics",
      titleKey: "collage.ceramicsTitle",
      descKey: "collage.ceramicsDesc",
      href: "/ceramics",
    },
    {
      src: "/assets/images/collage_car_window.jpg",
      alt: "Donna in auto con panorama siciliano / Woman in car with Sicilian view",
      titleKey: "collage.artistsTitle",
      descKey: "collage.artistsDesc",
      href: "/artists",
    },
  ] as const;

  // Keep all images at the same intrinsic size (uniform across rows)
  const IMG_WIDTH = 700;
  const IMG_HEIGHT = 875; // 4:5 ratio
  return (
    <section id="collage" className="container mx-auto py-16">
      <div className="mb-8">
        <h2 className="font-serif italic text-3xl md:text-4xl text-cobalt text-center">{t("collage.headline")}</h2>
      </div>
      <div className="space-y-12 md:space-y-16">
        {items.map((item, i) => {
          const odd = i % 2 === 1;
          return (
            <motion.figure
              key={item.src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i + 1}
              className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12"
            >
              {/* Image column */}
              <div className={`md:col-span-6 ${odd ? "md:order-2" : ""}`}>
                <Link
                  href={item.href}
                  aria-label={`${t("nav.products")}: ${t(item.titleKey)}`}
                  className="block group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={IMG_WIDTH}
                    height={IMG_HEIGHT}
                    className="img-shadow w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Link>
              </div>

              {/* Text column (description on the opposite side) */}
              <figcaption className={`md:col-span-6 ${odd ? "md:order-1" : ""}`}>
                <h3 className="font-serif italic text-xl md:text-2xl text-cobalt">
                  {t(item.titleKey)}
                </h3>
                <div className="mt-3 text-base md:text-lg opacity-80 whitespace-pre-line">
                  {t(item.descKey)}
                </div>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
}
