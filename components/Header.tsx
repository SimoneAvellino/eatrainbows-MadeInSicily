"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langBtnRef = useRef<HTMLButtonElement | null>(null);
  const { lang, setLang, t } = useI18n();

  // Hide header on scroll down (after small threshold), show ONLY when at top of page
  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const minY = 80; // threshold for "at top"
      
      // Show header only if we're at the very top
      if (y < minY) {
        setHideHeader(false);
      } else {
        setHideHeader(true);
      }
      
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Also check initial scroll position
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const solid = (pathname ?? "").startsWith("/products") || (pathname ?? "").startsWith("/contact") || (pathname ?? "").startsWith("/tables") || (pathname ?? "").startsWith("/ceramics") || (pathname ?? "").startsWith("/artists");
  const bgCls = solid ? "bg-[var(--color-text)]" : "bg-transparent";

  return (
    <>
    {/* Floating hamburger when header is hidden to keep navigation accessible */}
    {hideHeader && (
      <button
        className="fixed top-3 right-3 z-[70] inline-flex items-center justify-center w-10 h-10 rounded-md bg-porcelain/90 text-cobalt shadow-subtle hover:bg-porcelain focus:outline-none focus:ring-2 focus:ring-sunshine"
        aria-label="Open menu"
        onClick={() => setMobileOpen(true)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
      </button>
    )}

  <header className={`fixed top-0 inset-x-0 z-50 ${bgCls} text-porcelain transition-transform duration-500 ${hideHeader ? "-translate-y-full" : "translate-y-0"} ${solid ? "pb-6 md:pb-8" : ""}`}>
      {/* Top row: socials (left) + language selector (right) */}
  <div className="container mx-auto flex items-center justify-between pt-3 pb-1 px-4 md:px-0">
        {/* Socials */}
        <div className="flex items-center gap-4 text-porcelain/90">
          <Link aria-label="Instagram" href="#" className="hover:text-sunshine transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm5.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
          </Link>
          <Link aria-label="Facebook" href="#" className="hover:text-sunshine transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 22v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4z"/></svg>
          </Link>
        </div>

        {/* Right: language + mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block relative">
            <button
              ref={langBtnRef}
              type="button"
              className="inline-flex items-center gap-1 rounded-md bg-porcelain/15 hover:bg-porcelain/25 px-2.5 py-1.5 text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-sunshine"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((o) => !o)}
            >
              {lang}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {langOpen && (
              <div
                role="listbox"
                aria-label="Language"
                className="absolute right-0 mt-2 w-32 rounded-md bg-porcelain/95 text-cobalt shadow-subtle ring-1 ring-porcelain/40 overflow-hidden"
              >
                <button
                  role="option"
                  aria-selected={lang === "it"}
                  onClick={() => {
                    setLang("it");
                    setLangOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm hover:bg-porcelain/80 ${lang === "it" ? "font-medium" : ""}`}
                >
                  Italiano
                </button>
                <button
                  role="option"
                  aria-selected={lang === "en"}
                  onClick={() => {
                    setLang("en");
                    setLangOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm hover:bg-porcelain/80 ${lang === "en" ? "font-medium" : ""}`}
                >
                  English
                </button>
              </div>
            )}
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md bg-porcelain/10 hover:bg-porcelain/20 focus:outline-none focus:ring-2 focus:ring-sunshine"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" aria-hidden>
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Middle: centered logo */}
  <div className="container mx-auto flex items-center justify-center py-0.5 px-4 md:px-0">
        <Link href="/" className="flex items-center" aria-label="Taormina – Lava Stone & Ceramics home">
          <Image
            src="/assets/images/logo.png"
            alt="Logo Taormina – Lava Stone & Ceramics"
            width={420}
            height={100}
            priority
            className="h-12 md:h-16 w-auto"
            sizes="(max-width: 768px) 260px, 420px"
          />
        </Link>
      </div>

      {/* Bottom: centered nav (desktop) */}
      <nav aria-label="Main navigation" className="hidden md:block">
  <ul className="container mx-auto flex items-center justify-center gap-8 py-0.5 text-porcelain">
              {[{ href: "/", label: t("nav.home") }, { href: "/tables", label: t("nav.tables") }, { href: "/ceramics", label: t("nav.ceramics") }, { href: "/artists", label: t("nav.artists") }, { href: "/products", label: t("nav.products") }, { href: "/contact", label: t("nav.contact") }].map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`uppercase tracking-wider link-underline transition-colors ${active ? "text-sunshine" : "hover:text-sunshine/90"}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
    {/* Curvy bottom edge for solid headers (products/contact) - always rendered, animated with header */}
    {solid && (
      <div aria-hidden className={`pointer-events-none fixed top-[118px] md:top-[138px] inset-x-0 z-40 h-12 md:h-20 transition-transform duration-500 ${hideHeader ? "-translate-y-[200px] md:-translate-y-[250px]" : "translate-y-0"}`}>
        <svg
          className="w-full h-full scale-y-[-1]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C180,40 360,0 540,30 C720,60 900,10 1080,40 C1260,70 1380,30 1440,20 L1440,100 L0,100 Z"
            fill="#03267e"
          />
        </svg>
      </div>
    )}
    {/* Global overlay menu rendered outside the header so it works even when header is hidden */}
    {mobileOpen && (
      <div className="fixed inset-0 z-[80] bg-black/70">
        <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)} aria-label="Home">
            <Image
              src="/assets/images/logo.png"
              alt="Logo Taormina – Lava Stone & Ceramics"
              width={280}
              height={68}
              className="h-12 w-auto"
              sizes="280px"
            />
          </Link>
          <button
            className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-porcelain/10 hover:bg-porcelain/20 text-porcelain focus:outline-none focus:ring-2 focus:ring-sunshine"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" aria-hidden>
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18"/>
            </svg>
          </button>
        </div>
        <div className="absolute top-16 inset-x-4 md:inset-x-20 lg:inset-x-40 rounded-2xl bg-porcelain/90 text-cobalt p-6 shadow-subtle">
          <ul className="grid gap-4 text-center">
            {[{ href: "/", label: t("nav.home") }, { href: "/tables", label: t("nav.tables") }, { href: "/ceramics", label: t("nav.ceramics") }, { href: "/artists", label: t("nav.artists") }, { href: "/products", label: t("nav.products") }, { href: "/contact", label: t("nav.contact") }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-lg font-medium" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm">
            <button onClick={() => setLang("it")} className={`uppercase ${lang === "it" ? "text-cobalt" : "text-cobalt/60"}`}>IT</button>
            <span className="text-cobalt/30">|</span>
            <button onClick={() => setLang("en")} className={`uppercase ${lang === "en" ? "text-cobalt" : "text-cobalt/60"}`}>EN</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
