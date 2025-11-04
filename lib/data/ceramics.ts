export type CeramicItem = {
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

export const ceramics: CeramicItem[] = [
  {
    name_it: "Piatto Agrumi",
    name_en: "Citrus Plate",
    slug: "piatto-agrumi",
    src: "/assets/images/ceramics/1.jpg",
    width: 1200,
    height: 900,
    alt_it: "Piatto in ceramica con motivo di agrumi dipinto a mano",
    alt_en: "Ceramic plate with hand-painted citrus motif",
    desc_it:
      "Piatto in maiolica realizzato a mano con decoro agrumi e smalti vivaci. Ideale come servizio tavola o elemento decorativo.",
    desc_en:
      "Handcrafted maiolica plate with citrus decoration and vibrant glazes. Perfect as tableware or a decorative piece.",
  },
  {
    name_it: "Vaso Rosoni",
    name_en: "Rosettes Vase",
    slug: "vaso-rosoni",
    src: "/assets/images/ceramics/2.jpg",
    width: 1200,
    height: 900,
    alt_it: "Vaso in ceramica con rosoni mediterranei",
    alt_en: "Ceramic vase with Mediterranean rosettes",
    desc_it:
      "Vaso in ceramica artigianale, smaltato e dipinto a mano con rosoni. Finitura lucida o satinata su richiesta.",
    desc_en:
      "Handcrafted ceramic vase, glazed and hand-painted with rosettes. Glossy or satin finish available on request.",
  },
];
