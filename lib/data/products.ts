export type Product = {
  name: string;
  slug: string;
  src: string;
  width: number;
  height: number;
  material: string;
  alt_it: string;
  alt_en: string;
};

export const products: Product[] = [
  {
    name: "Tavolo Etna Blu",
    slug: "tavolo-etna-blu",
    src: "/assets/images/collage_sea.jpg",
    width: 1200,
    height: 800,
    material: "Pietra lavica smaltata",
    alt_it: "Tavolo in pietra lavica decorato nei toni blu",
    alt_en: "Glazed lava-stone table decorated in blue tones",
  },
  {
    name: "Vaso Mediterraneo",
    slug: "vaso-mediterraneo",
    src: "/assets/images/collage_couple.jpg",
    width: 1000,
    height: 1200,
    material: "Ceramica dipinta a mano",
    alt_it: "Vaso in ceramica con motivi mediterranei",
    alt_en: "Hand-painted ceramic vase with Mediterranean motifs",
  },
  {
    name: "Servizio Maiolica",
    slug: "servizio-maiolica",
    src: "/assets/images/collage_car_window.jpg",
    width: 1000,
    height: 1000,
    material: "Ceramica artigianale",
    alt_it: "Servizio di piatti in maiolica siciliana",
    alt_en: "Sicilian maiolica dish set",
  },
];
