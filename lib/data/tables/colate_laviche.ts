import type { TablesSection } from "./types";

const base = "/assets/images/tables/colate_laviche";

export const colateLaviche: TablesSection = {
  slug: "colate_laviche",
  titleKey: "tables.sections.colate_laviche.title",
  descKey: "tables.sections.colate_laviche.desc",
  quote: "", // no quote for this section
  items: [
    {
      title: "Sciara di Fuoco",
      dimension: "Ø 120 cm",
      weight: "100 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.smalti_vari",
      image: {
        src: `${base}/1.webp`,
        width: 1200,
        height: 900,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
      ],
    },
    {
      title: "Poesia di Smalti",
      dimension: "Ø 120 cm",
      weight: "120 kg",
      thickness: "4 cm",
      paintingTechniqueKey: "tables.painting.smalti_vari",
      image: {
        src: `${base}/2.webp`,
        width: 1200,
        height: 900,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
      ],
    },
    {
      title: "Blu Profondo",
      dimension: "Ø 60 cm",
      weight: "17 kg",
      thickness: "2 cm",
      paintingTechniqueKey: "tables.painting.smalto_blu",
      image: {
        src: `${base}/3.webp`,
        width: 1200,
        height: 900,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
      ],
    },
    {
      title: "Eclissi di Smalti",
      dimension: "Ø 60 cm",
      weight: "17 kg",
      thickness: "2 cm",
      paintingTechniqueKey: "tables.painting.smalti_vari",
      image: {
        src: `${base}/4.webp`,
        width: 1200,
        height: 900,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
      ],
    },
    {
      title: "Impressioni di Sicilia",
      dimension: "Ø 60 cm",
      weight: "17 kg",
      thickness: "2 cm",
      paintingTechniqueKey: "tables.painting.smalto_vetrificato",
      image: {
        src: `${base}/5.webp`,
        width: 1200,
        height: 900,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
      ],
    },
    {
      title: "Riproduzione di natura morta",
      dimension: "60x90 cm",
      weight: "32 kg",
      thickness: "2 cm",
      paintingTechniqueKey: "tables.painting.smalti_vari",
      image: {
        src: `${base}/6.webp`,
        width: 1200,
        height: 900,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "square", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "rectangle", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "ellipse", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
      ],
    }
    
  ],
};
