import type { TablesSection } from "./types";

const base = "/assets/images/tables/colate_laviche";

export const colateLaviche: TablesSection = {
  slug: "colate_laviche",
  titleKey: "tables.sections.colate_laviche.title",
  descKey: "tables.sections.colate_laviche.desc",
  quote: "", // no quote for this section
  items: [
    {
      title: "Colate 01",
      dimension: "120 x 60 cm",
      weight: "~45 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.hand_painted_glaze",
      image: {
        src: `${base}/1.webp`,
        width: 1200,
        height: 900,
        alt_it: "Tavolo in pietra lavica dipinto a mano - Colate Laviche 01",
        alt_en: "Hand-painted lava-stone table - Lava Flows 01",
      },
      formats: [
        { shape: "rectangle", dimension: { from: "60x120", to: "90x180" }, thickness: 3 },
        { shape: "circle", dimension: { from: 70, to: 150 }, thickness: 3 },
      ],
    },
    {
      title: "Colate 02",
      dimension: "150 x 80 cm",
      weight: "~55 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.hand_painted_glaze",
      image: {
        src: `${base}/2.webp`,
        width: 1200,
        height: 900,
        alt_it: "Tavolo in pietra lavica dipinto a mano - Colate Laviche 02",
        alt_en: "Hand-painted lava-stone table - Lava Flows 02",
      },
      formats: [
        { shape: "rectangle", dimension: { from: "80x150", to: "120x240" }, thickness: 3 },
        { shape: "square", dimension: { from: 60, to: 120 }, thickness: 3 },
      ],
    },
    {
      title: "Colate 03",
      dimension: "Ø 120 cm",
      weight: "~50 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.hand_painted_glaze",
      image: {
        src: `${base}/3.webp`,
        width: 1200,
        height: 900,
        alt_it: "Tavolo rotondo in pietra lavica - Colate Laviche 03",
        alt_en: "Round lava-stone table - Lava Flows 03",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "ellipse", dimension: { from: "60x120", to: "110x200" }, thickness: 3 },
      ],
    },
    {
      title: "Colate 04",
      dimension: "200 x 100 cm",
      weight: "~70 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.hand_painted_glaze",
      image: {
        src: `${base}/4.webp`,
        width: 1200,
        height: 900,
        alt_it: "Tavolo in pietra lavica dipinto a mano - Colate Laviche 04",
        alt_en: "Hand-painted lava-stone table - Lava Flows 04",
      },
      formats: [
        { shape: "rectangle", dimension: { from: "70x140", to: "100x200" }, thickness: 3 },
        { shape: "square", dimension: { from: 60, to: 150 }, thickness: 3 },
      ],
    },
    {
      title: "Colate 05",
      dimension: "Ø 90 cm",
      weight: "~40 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.hand_painted_glaze",
      image: {
        src: `${base}/5.webp`,
        width: 1200,
        height: 900,
        alt_it: "Tavolo rotondo in pietra lavica dipinto a mano - Colate Laviche 05",
        alt_en: "Round hand-painted lava-stone table - Lava Flows 05",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 120 }, thickness: 3 },
        { shape: "ellipse", dimension: { from: "60x120", to: "100x180" }, thickness: 3 },
      ],
    },
  ],
};
