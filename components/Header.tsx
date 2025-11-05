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
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const { lang, setLang, t } = useI18n();
  const waveRef = useRef<HTMLDivElement | null>(null);
  const [waveHeight, setWaveHeight] = useState(0);

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

  // Track header height so the wave can be positioned exactly under it
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  // Track wave height to slide it fully out when header hides
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = waveRef.current;
    if (!el) return;
    const update = () => setWaveHeight(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
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

  <header ref={headerRef} className={`fixed top-0 inset-x-0 z-50 ${bgCls} text-porcelain transition-transform duration-500 ${hideHeader ? "-translate-y-full" : "translate-y-0"}`}>
      {/* Top row: socials (left) + centered logo + language selector (right) */}
  <div className="container mx-auto grid grid-cols-3 items-center pt-2 pb-2 px-4 md:px-0">
        {/* Socials (left) */}
        <div className="flex items-center gap-4 text-porcelain/90 justify-self-start">
          <Link aria-label="Instagram" href="#" className="hover:text-sunshine transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm5.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
          </Link>
          <Link aria-label="Facebook" href="#" className="hover:text-sunshine transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 22v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4z"/></svg>
          </Link>
        </div>

        {/* Centered logo */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center" aria-label="Taormina – Lava Stone & Ceramics home">
            <Image
              src="/assets/images/logo.png"
              alt="Logo Taormina – Lava Stone & Ceramics"
              width={360}
              height={86}
              priority
              className="h-10 md:h-14 w-auto"
              sizes="(max-width: 768px) 220px, 360px"
            />
          </Link>
        </div>

        {/* Right: language + mobile toggle */}
        <div className="flex items-center gap-4 justify-self-end">
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
      {/* Bottom: centered nav (desktop) - moved closer to top and tightened spacing */}
      <nav aria-label="Main navigation" className="hidden md:block">
  <ul className="container mx-auto flex items-center justify-center gap-8 py-1 text-porcelain">
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
    {/* Curvy bottom edge for solid headers (products/contact) - positioned dynamically based on header height */}
    {solid && (
      <div
        aria-hidden
        ref={waveRef}
        className={`pointer-events-none fixed inset-x-0 z-40 h-12 md:h-20 transition-transform duration-500`}
        style={{
          top: headerHeight || 0,
          transform: hideHeader
            ? `translateY(-${(headerHeight || 0) + (waveHeight || 0)}px)`
            : "translateY(0)",
        }}
      >
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
      <div className="fixed inset-0 z-[80] bg-[var(--color-text)] text-porcelain flex flex-col" role="dialog" aria-modal="true" aria-label="Mobile menu">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-md bg-porcelain/10 hover:bg-porcelain/20 focus:outline-none focus:ring-2 focus:ring-sunshine"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18"/>
          </svg>
        </button>

        {/* Fullscreen navigation with centered logo */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
          <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)} aria-label="Home">
            <Image
              src="/assets/images/logo.png"
              alt="Logo Taormina – Lava Stone & Ceramics"
              width={420}
              height={100}
              className="h-20 md:h-28 w-auto"
              sizes="(max-width: 768px) 320px, 420px"
            />
          </Link>
          <ul className="w-full max-w-md">
            {[{ href: "/", label: t("nav.home") }, { href: "/tables", label: t("nav.tables") }, { href: "/ceramics", label: t("nav.ceramics") }, { href: "/artists", label: t("nav.artists") }, { href: "/products", label: t("nav.products") }, { href: "/contact", label: t("nav.contact") }].map((item) => (
              <li key={item.href} className="border-t border-porcelain/15 first:border-t-0">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-5 text-2xl uppercase tracking-wider hover:text-sunshine focus:outline-none focus:ring-2 focus:ring-sunshine/70"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language toggle footer */}
        <div className="p-6 flex items-center justify-center gap-4 text-sm">
          <button onClick={() => setLang("it")} className={`uppercase ${lang === "it" ? "text-porcelain" : "text-porcelain/60"}`}>IT</button>
          <span className="text-porcelain/30">|</span>
          <button onClick={() => setLang("en")} className={`uppercase ${lang === "en" ? "text-porcelain" : "text-porcelain/60"}`}>EN</button>
        </div>
      </div>
    )}
    </>
  );
}
