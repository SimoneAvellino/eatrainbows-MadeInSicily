export type TableItem = {
  name_it: string;
  name_en: string;
  slug: string;
  src: string;
  width: number;
  height: number;
  alt_it: string;
  alt_en: string;
  desc_it: string;
  desc_en: string;
};

export const tables: TableItem[] = [
  {
    name_it: "Tavolo Agrumi",
    name_en: "Citrus Table",
    slug: "tavolo-agrumi",
    src: "/assets/images/tables/1.jpg",
    width: 1200,
    height: 900,
    alt_it: "Tavolo in pietra lavica con decoro agrumi",
    alt_en: "Lava-stone table with citrus motif",
    desc_it:
      "Piano in pietra lavica smaltato e dipinto a mano con motivi di agrumi. Adatto per interno ed esterno, resistente a sole e salsedine.",
    desc_en:
      "Glazed lava-stone top hand-painted with citrus motifs. Suitable for indoor/outdoor use, resistant to sun and sea salt.",
  },
  {
    name_it: "Tavolo Rosoni",
    name_en: "Rosettes Table",
    slug: "tavolo-rosoni",
    src: "/assets/images/tables/2.jpg",
    width: 1200,
    height: 900,
    alt_it: "Tavolo in pietra lavica con rosoni mediterranei",
    alt_en: "Lava-stone table with Mediterranean rosettes",
    desc_it:
      "Decorazione tradizionale a rosoni in smalto lucido. Finiture personalizzabili e base su misura in ferro o pietra.",
    desc_en:
      "Traditional rosette decoration with glossy glaze. Custom finishes and made-to-measure iron or stone base.",
  },
  {
    name_it: "Tavolo Tralci",
    name_en: "Vines Table",
    slug: "tavolo-tralci",
    src: "/assets/images/tables/3.jpg",
    width: 1200,
    height: 900,
    alt_it: "Tavolo in pietra lavica con tralci e greche",
    alt_en: "Lava-stone table with vines and Greek keys",
    desc_it:
      "Motivi di tralci e greche eseguiti a pennello su superficie smaltata. Colori resistenti agli agenti atmosferici.",
    desc_en:
      "Vines and Greek key motifs painted by hand on glazed surface. Colors resistant to weathering.",
  },
  {
    name_it: "Tavolo Onde",
    name_en: "Waves Table",
    slug: "tavolo-onde",
    src: "/assets/images/tables/4.jpeg",
    width: 1200,
    height: 900,
    alt_it: "Tavolo in pietra lavica con motivo onde marine",
    alt_en: "Lava-stone table with wave motif",
    desc_it:
      "Decorazione ispirata al mare con smalti vivaci. Ideale per terrazze e giardini grazie alla grande resistenza.",
    desc_en:
      "Sea-inspired decoration with vibrant glazes. Ideal for terraces and gardens thanks to high durability.",
  },
];
