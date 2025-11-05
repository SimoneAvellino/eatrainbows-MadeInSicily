import type { TablesSection } from "./types";

const base = "/assets/images/tables/essenze_siciliane";

export const essenzeSiciliane: TablesSection = {
  slug: "essenze_siciliane",
  titleKey: "tables.sections.essenze_siciliane.title",
  descKey: "tables.sections.essenze_siciliane.desc",
  quote: "\"Sicilia terra di suli, di mari, d’amuri e di bidizzi rari\". (A. Giostra)",
  items: [
    {
      title: "Essenze 01",
      dimension: "120 x 60 cm",
      weight: "~45 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.hand_painted_glaze",
      image: {
        src: `${base}/1.webp`,
        width: 1200,
        height: 900,
        alt_it: "Tavolo in pietra lavica dipinto a mano - Essenze Siciliane 01",
        alt_en: "Hand-painted lava-stone table - Sicilian Essences 01",
      },
      formats: [
        { shape: "square", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "rectangle", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "ellipse", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
      ],
    },
    {
      title: "Essenze 02",
      dimension: "150 x 80 cm",
      weight: "~55 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.hand_painted_glaze",
      image: {
        src: `${base}/2.webp`,
        width: 1200,
        height: 900,
        alt_it: "Tavolo in pietra lavica dipinto a mano - Essenze Siciliane 02",
        alt_en: "Hand-painted lava-stone table - Sicilian Essences 02",
      },
      formats: [
        { shape: "rectangle", dimension: { from: "80x150", to: "120x240" }, thickness: 3 },
        { shape: "circle", dimension: { from: 70, to: 150 }, thickness: 3 },
      ],
    },
    {
      title: "Essenze 03",
      dimension: "Ø 120 cm",
      weight: "~50 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.hand_painted_glaze",
      image: {
        src: `${base}/3.webp`,
        width: 1200,
        height: 900,
        alt_it: "Tavolo rotondo in pietra lavica dipinto a mano - Essenze Siciliane 03",
        alt_en: "Round hand-painted lava-stone table - Sicilian Essences 03",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "square", dimension: { from: 60, to: 120 }, thickness: 3 }
      ],
    },
  ],
};
