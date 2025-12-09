import type { TablesSection } from "./types";

const base = "/assets/images/tables/novita";

export const novit: TablesSection = {
  slug: "novita",
  titleKey: "tables.sections.novita.title",
  descKey: "tables.sections.novita.desc",
  quote: "",
  items: [1, 2, 3, 4, 5, 6].map((n) => ({
    title: `New ${n}`,
    dimension: "",
    weight: "",
    thickness: "",
    paintingTechniqueKey: "",
    image: {
      src: `${base}/${n}.webp`,
      width: 1200,
      height: 900,
      alt_it: "",
      alt_en: "",
    },
    formats: [],
  })),
};
