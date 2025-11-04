import type { Metadata } from "next";
import { cookies } from "next/headers";
import en from "@/i18n/dictionaries/en.json";
import it from "@/i18n/dictionaries/it.json";
import ContactForm from "@/components/ContactForm";
import ContactHeading from "@/components/ContactHeading";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "it" ? "it" : "en";
  const dict = lang === "it" ? it : en;
  return {
    title: dict["meta.contact.title"],
    description: dict["meta.contact.description"],
    openGraph: {
      title: dict["meta.contact.title"],
      description: dict["meta.contact.description"],
    },
  } satisfies Metadata;
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const sp = await searchParams;
  const defaultProduct = sp?.product ?? "";
  return (
    <section className="container mx-auto py-12 pt-44 md:pt-56">
      <ContactHeading />
      <ContactForm defaultProduct={defaultProduct} />
    </section>
  );
}
