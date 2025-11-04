"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

type FormValues = {
  name: string;
  contact: string; // email or phone
  message: string;
  product?: string;
};

export default function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const { t } = useI18n();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({ defaultValues: { product: defaultProduct } });

  function onSubmit(data: FormValues) {
    console.log("Contact form submitted", data);
    reset({ name: "", contact: "", message: "", product: defaultProduct });
  }

  return (
      <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-3">
        <p>
            {t("contact.phone")}: <a className="underline" href="tel:+390000000000">+39 000 000 0000</a>
        </p>
        <p>
            {t("contact.email")}: <a className="underline" href="mailto:info@tusitio.it">info@tusitio.it</a>
        </p>
        <p>
          <Link
            href="https://wa.me/390000000000"
            className="inline-block bg-turquoise text-white px-4 py-2 rounded-md hover:bg-sky transition-colors"
          >
              {t("contact.whatsapp")}
          </Link>
        </p>

        <div className="mt-6">
          <div className="font-serif text-xl mb-2">Taormina</div>
          <div className="overflow-hidden rounded-xl shadow-subtle">
            <iframe
              title="Mappa di Taormina / Map of Taormina"
              src="https://www.google.com/maps?q=Taormina&output=embed"
              width="100%"
              height="260"
              loading="lazy"
            />
          </div>
        </div>
      </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white/70 rounded-xl p-6 shadow-subtle border border-porcelain">
        <div className="grid gap-4">
          <div>
              <label className="block text-sm mb-1" htmlFor="name">{t("contact.form.name")}</label>
            <input
              id="name"
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
                {...register("name", { required: "Please tell us your name" })}
            />
            {errors.name && <p className="text-red-700 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
              <label className="block text-sm mb-1" htmlFor="contact">{t("contact.form.contact")}</label>
            <input
              id="contact"
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
              {...register("contact", { required: "Please provide an email or phone" })}
            />
            {errors.contact && <p className="text-red-700 text-sm mt-1">{errors.contact.message}</p>}
          </div>

          <div>
              <label className="block text-sm mb-1" htmlFor="product">{t("contact.form.product")}</label>
            <input
              id="product"
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
              placeholder="e.g. tavolo-etna-blu"
              {...register("product")}
            />
          </div>

          <div>
              <label className="block text-sm mb-1" htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise"
              {...register("message", { required: "Please include a message" })}
            />
            {errors.message && <p className="text-red-700 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
              className="mt-2 bg-turquoise text-white px-4 py-2 rounded-md hover:bg-sky transition-colors w-full md:w-auto"
          >
              {t("contact.form.send")}
          </button>

            {isSubmitSuccessful && (
              <p className="text-green-700 text-sm">{t("contact.form.success")}</p>
            )}
        </div>
      </form>
    </div>
  );
}
