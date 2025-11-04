"use client";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  // Contact details
  const displayPhone = "+39 331 286 7417";
  const telHref = "tel:+393312867417";
  const email = "info@tusitio.it";
  const address = "Via Teatro Greco, 1, 98039 Taormina (ME), Italia";
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // WhatsApp preset message per locale
  const waNumber = "393312867417"; // E.164 without +
  const waText = encodeURIComponent(t("footer.whatsappPreset"));
  const waHref = `https://wa.me/${waNumber}?text=${waText}`;

  // Weekday names (Mon..Sun) localized via i18n
  const days = [
    t("footer.days.mon"),
    t("footer.days.tue"),
    t("footer.days.wed"),
    t("footer.days.thu"),
    t("footer.days.fri"),
    t("footer.days.sat"),
    t("footer.days.sun"),
  ];
  // JS getDay(): 0=Sun..6=Sat -> convert to Mon=0..Sun=6
  const todayMonIndex = ((new Date().getDay() + 6) % 7);

  return (
    <footer className="mt-16 bg-[var(--color-text)] text-[var(--color-bg)]">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Left: Sitemap */}
        <div>
          <h3 className="font-serif text-xl mb-3">{t("footer.sitemap")}</h3>
          <nav aria-label={t("footer.sitemap")}>
            <ul className="space-y-2 opacity-90">
              <li>
                <Link className="hover:opacity-100 underline underline-offset-2" href="/">{t("nav.home")}</Link>
              </li>
              <li>
                <Link className="hover:opacity-100 underline underline-offset-2" href="/tables">{t("nav.tables")}</Link>
              </li>
              <li>
                <Link className="hover:opacity-100 underline underline-offset-2" href="/ceramics">{t("nav.ceramics")}</Link>
              </li>
              <li>
                <Link className="hover:opacity-100 underline underline-offset-2" href="/artists">{t("nav.artists")}</Link>
              </li>
              <li>
                <Link className="hover:opacity-100 underline underline-offset-2" href="/products">{t("nav.products")}</Link>
              </li>
              <li>
                <Link className="hover:opacity-100 underline underline-offset-2" href="/contact">{t("nav.contact")}</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Center: Contacts */}
        <div>
          <h3 className="font-serif text-xl mb-3">{t("footer.contacts")}</h3>
          <ul className="space-y-2 opacity-90">
            <li>
              <span className="mr-2">{t("contact.phone")}:</span>
              <a className="underline underline-offset-2" href={telHref}>{displayPhone}</a>
            </li>
            <li>
              <span className="mr-2">{t("contact.email")}:</span>
              <a className="underline underline-offset-2" href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <span className="mr-2">{t("footer.location")}:</span>
              <a className="underline underline-offset-2" href={mapsHref} target="_blank" rel="noreferrer noopener">
                {address}
              </a>
            </li>
            <li>
              <span className="mr-2">{t("contact.whatsapp")}:</span>
              <a className="underline underline-offset-2" href={waHref} target="_blank" rel="noreferrer noopener">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Opening times */}
        <div>
          <h3 className="font-serif text-xl mb-3">{t("footer.openingHours")}</h3>
          <ul className="opacity-90 space-y-1">
            {days.map((d, i) => (
              <li key={d} className={i === todayMonIndex ? "font-semibold" : undefined}>
                <span className="inline-block w-28">{d}</span>
                <span>9:30 – 23:00</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center text-sm opacity-70 py-5 border-t border-white/20">
        © {new Date().getFullYear()} Taormina – Lava Stone & Ceramics
      </div>
    </footer>
  );
}
