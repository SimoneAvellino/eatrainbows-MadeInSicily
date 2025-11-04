// Template for using a downloaded local font with next/font/local
// 1) Drop your files in /public/fonts/
// 2) Update the src paths below (prefer .woff2)
// 3) Import { localSerif } in app/layout.tsx and replace the serif variable
//    on the <html> tag: className={`${localSerif.variable} ${inter.variable}`}

import localFont from "next/font/local";

// Configured to use the user's Chamberi Display Extra Bold Italic for titles
export const localSerif = localFont({
  src: [
  { path: "../public/fonts/chamberi-display-extra-bold-italic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-serif", // mapped in Tailwind to font-serif
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

// Local sans: Poiret One Regular for body and non-title text
export const localSans = localFont({
  src: [
    { path: "../public/fonts/PoiretOne-Regular.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans", // mapped in Tailwind to font-sans
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});
