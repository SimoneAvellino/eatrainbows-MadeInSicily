"use client";
import { useI18n } from "@/i18n/I18nProvider";

export default function ContactHeading() {
  const { t } = useI18n();
  return <h1 className="font-serif text-3xl md:text-4xl text-cobalt mb-6">{t("contact.heading")}</h1>;
}
