import type { TablesSection } from "./types";

const base = "/assets/images/tables/golden_etna";

export const goldenEtna: TablesSection = {
  slug: "golden_etna",
  titleKey: "tables.sections.golden_etna.title",
  descKey: "tables.sections.golden_etna.desc",
  quote: "\"Quando la pietra lavica diviene l’oro dell’Etna!\"",
  items: [
    {
      title: "Gold Feathers",
      dimension: "Ø 60 cm",
      weight: "100 kg",
      thickness: "3 cm",
      paintingTechniqueKey: "tables.painting.mista",
      image: {
        src: `${base}/1.webp`,
        width: 800,
        height: 500,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
      ],
    },
    {
      title: "Pannello Murale",
      dimension: "",
      weight: "",
      thickness: "2 cm",
      paintingTechniqueKey: "tables.painting.mista",
      image: {
        src: `${base}/3.webp`,
        width: 800,
        height: 500,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        
      ],
    },
    {
      title: "Platinum Strips - 1",
      dimension: "30x60 cm",
      weight: "5 kg",
      thickness: "1 cm",
      paintingTechniqueKey: "tables.painting.pittura_su_smalto",
      image: {
        src: `${base}/4.webp`,
        width: 800,
        height: 500,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "square", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "rectangle", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
      ],
    },
    {
      title: "Platinum Strips - 2",
      dimension: "20x20 cm",
      weight: "1.5 kg",
      thickness: "0.50 cm",
      paintingTechniqueKey: "tables.painting.lustri_e_smalto",
      image: {
        src: `${base}/5.webp`,
        width: 800,
        height: 500,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "square", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "rectangle", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
      ],
    },
    {
      title: "Platinum Strips - 3",
      dimension: "20x20 cm",
      weight: "1.5 kg",
      thickness: "0.50 cm",
      paintingTechniqueKey: "tables.painting.lustri_e_smalto",
      image: {
        src: `${base}/6.webp`,
        width: 800,
        height: 500,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "square", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "rectangle", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
      ],
    },
    {
      title: "Gold Flowers",
      dimension: "Ø 60 cm",
      weight: "17 kg",
      thickness: "2 cm",
      paintingTechniqueKey: "tables.painting.lustri",
      image: {
        src: `${base}/7.webp`,
        width: 1200,
        height: 900,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "ellipse", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
      ],
    },
    {
      title: "Gold Ring",
      dimension: "Ø 60 cm",
      weight: "1t kg",
      thickness: "2 cm",
      paintingTechniqueKey: "tables.painting.lustri",
      image: {
        src: `${base}/8.webp`,
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
    },
    {
      title: "Gold Leaf",
      dimension: "Ø 60 cm",
      weight: "17 kg",
      thickness: "2 cm",
      paintingTechniqueKey: "tables.painting.lustri",
      image: {
        src: `${base}/9.webp`,
        width: 1200,
        height: 900,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "ellipse", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
      ],
    },
    {
      title: "Gold Flowers",
      dimension: "Ø 60 cm",
      weight: "17 kg",
      thickness: "2 cm",
      paintingTechniqueKey: "tables.painting.lustri",
      image: {
        src: `${base}/10.webp`,
        width: 1200,
        height: 900,
        alt_it: "",
        alt_en: "",
      },
      formats: [
        { shape: "circle", dimension: { from: 60, to: 150 }, thickness: 3 },
        { shape: "ellipse", dimension: { from: "60x120", to: "120x60" }, thickness: 3 },
      ],
    }
  ],
};
