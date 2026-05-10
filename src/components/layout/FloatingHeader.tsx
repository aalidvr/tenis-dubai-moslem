import { useEffect, useState } from "react";
import { CalendarCheck, Menu, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { LanguageSwitch } from "./LanguageSwitch";
import { CourtLines } from "../ornaments/Ornaments";

const navKeys = ["home", "about", "services", "method", "gallery", "booking"] as const;
const sectionIds: Record<(typeof navKeys)[number], string> = {
  home: "home",
  about: "about",
  services: "services",
  method: "method",
  gallery: "gallery",
  booking: "booking",
};

export function FloatingHeader() {
  const { t, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-3 transition-all duration-500 ${scrolled ? "pt-2" : "pt-4"}`}
      >
        <div
          className={`relative w-full max-w-6xl transition-all duration-500 ${scrolled ? "scale-[0.985]" : "scale-100"}`}
        >
          <div className="pointer-events-none absolute inset-x-8 -bottom-2 hidden h-8 rounded-[999px] bg-midnight/10 blur-xl md:block" />
          <div className="pointer-events-none absolute -end-2 top-1/2 hidden h-10 w-20 -translate-y-1/2 rounded-full border border-gold/20 bg-gold/10 blur-sm md:block" />
          <div
            className={`glass-pill relative grid w-full grid-cols-[auto_1fr_auto] items-center overflow-hidden rounded-[2rem] border-gold/30 transition-all duration-500 before:pointer-events-none before:absolute before:inset-1 before:rounded-[1.7rem] before:border before:border-white/45 after:pointer-events-none after:absolute after:inset-x-[14%] after:-bottom-5 after:h-8 after:rounded-[50%] after:border-t after:border-gold/25 ${scrolled ? "min-h-12 px-2.5 py-1.5 shadow-sm" : "min-h-16 px-3 py-2"}`}
          >
            <div className="pointer-events-none absolute -start-10 top-0 h-full w-44 skew-x-[-18deg] bg-gradient-to-r from-midnight/[0.07] to-transparent" />
            <div className="pointer-events-none absolute end-28 top-1/2 hidden h-7 w-px -translate-y-1/2 bg-gold/25 lg:block" />
            {/* Logo */}
            <a href="#home" className="relative z-10 flex items-center gap-2 ps-1">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 bg-midnight text-pearl font-display text-[13px] leading-none tracking-tight shadow-[inset_0_0_0_1px_rgba(255,255,255,.08)]">
                MM
              </span>
              <span className="hidden md:flex flex-col leading-normal">
                <span className="text-[13px] font-medium leading-snug text-midnight">
                  Mohammad Moslem
                </span>
                <span className="text-[10px] text-midnight/55">{t.header.tagline}</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="relative z-10 hidden justify-self-center rounded-full border border-midnight/5 bg-pearl/35 px-1.5 py-1 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,.5)] backdrop-blur lg:flex lg:items-center lg:gap-1">
              {navKeys.map((k) => (
                <a
                  key={k}
                  href={`#${sectionIds[k]}`}
                  className="group relative rounded-full px-3.5 py-2 text-midnight/72 transition hover:bg-white/35 hover:text-midnight"
                >
                  {t.nav[k]}
                  <span className="pointer-events-none absolute start-1/2 -bottom-0.5 h-1.5 w-1.5 -translate-x-1/2 scale-0 rounded-full bg-gold transition-transform duration-300 group-hover:scale-100" />
                  <span className="pointer-events-none absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 rounded-full bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="relative z-10 flex items-center gap-2 justify-self-end pe-1">
              <LanguageSwitch compact />
              <a
                href="#booking"
                className="hidden items-center rounded-full border border-gold/40 bg-midnight px-4 py-2.5 text-xs font-medium text-pearl shadow-[0_12px_26px_-18px_rgba(8,17,29,.7)] transition hover:border-gold hover:bg-midnight/95 hover:shadow-[0_16px_34px_-20px_rgba(201,161,93,.9)] sm:inline-flex"
              >
                {t.cta.book}
              </a>
              <a
                href="#booking"
                className="grid h-9 w-9 place-items-center rounded-full bg-midnight text-pearl shadow-sm sm:hidden"
                aria-label={t.cta.book}
              >
                <CalendarCheck className="h-4 w-4" />
              </a>
              <button
                onClick={() => setOpen(true)}
                className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-pearl/70 text-midnight lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-pearl">
          <div className="absolute inset-0 palm-pattern opacity-40" />
          <div className="absolute inset-0 text-gold/40">
            <CourtLines className="absolute inset-x-0 bottom-0 w-full opacity-30" />
          </div>
          <div className="relative flex h-full flex-col px-6 pt-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg text-midnight">MM</span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-midnight"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-5">
              {navKeys.map((k, i) => (
                <a
                  key={k}
                  href={`#${sectionIds[k]}`}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-midnight transition hover:text-gold"
                  style={{
                    animation: open ? `reveal-up 0.5s ease-out ${i * 60}ms both` : undefined,
                  }}
                >
                  {t.nav[k]}
                </a>
              ))}
            </nav>
            <div className="mt-auto pb-8 flex flex-col gap-4">
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-midnight px-6 py-3.5 text-sm font-medium text-pearl"
              >
                {t.cta.book}
              </a>
              <div className="flex items-center justify-between">
                <span className="text-xs text-midnight/60">
                  {lang === "ar" ? "اللغة" : "Language"}
                </span>
                <LanguageSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
