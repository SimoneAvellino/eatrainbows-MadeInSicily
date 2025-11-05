export type Shape = "circle" | "ellipse" | "square" | "rectangle";

// Allow number for simple sizes (e.g., 60 cm) and string for compound sizes (e.g., "60x120 cm")
export type FormatDimension = number | string;

export type TableFormat = {
  shape: Shape;
  dimension: {
    from: FormatDimension;
    to: FormatDimension;
  };
  thickness: number; // cm
};

export type TableImage = {
  src: string;
  width: number;
  height: number;
  alt_it: string;
  alt_en: string;
};

export type TableItem = {
  title: string; // Not translated
  dimension: string; // Not translated (free text)
  weight: string; // Not translated
  thickness: string; // Not translated (free text)
  paintingTechniqueKey: string; // Translated via i18n (e.g., "tables.painting.hand_painted_glaze")
  image: TableImage;
  formats: TableFormat[];
};

export type TablesSection = {
  slug: string;
  titleKey: string; // i18n key
  descKey: string; // i18n key (only description sentence)
  quote: string; // Not translated
  items: TableItem[];
};
