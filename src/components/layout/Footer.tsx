import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { CourtLines } from "../ornaments/Ornaments";

const footerBackground = "/image/footer background/footer-bg-tenis-site-1.webp";

export function Footer() {
  const { t, lang } = useLang();
  const links = t.footer.links;
  const items: Array<[keyof typeof links, string]> = [
    ["home", "#home"],
    ["about", "#about"],
    ["services", "#services"],
    ["method", "#method"],
    ["booking", "#booking"],
    ["contact", "#booking"],
  ];

  return (
    <footer className="relative overflow-hidden bg-midnight text-pearl">
      <img
        src={footerBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-30"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-midnight/70" />
      <div className="pointer-events-none absolute inset-0 text-gold/15">
        <CourtLines className="absolute -bottom-10 start-1/2 w-[800px] -translate-x-1/2" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-28 md:pb-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 font-display text-sm">
                MM
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg">Mohammad Moslem</div>
                <div className="text-xs text-pearl/60">{t.footer.tagline}</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-pearl/65">
              {lang === "ar"
                ? "تجربة تدريب تنس خاصة وراقية في دبي، تجمع بين التقنية، الحركة، واللياقة الوظيفية."
                : "A premium private tennis coaching experience in Dubai, blending technique, movement, and functional fitness."}
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {lang === "ar" ? "روابط" : "Links"}
            </div>
            <ul className="grid grid-cols-2 gap-2 text-sm text-pearl/80">
              {items.map(([k, href]) => (
                <li key={k}>
                  <a href={href} className="hover:text-gold transition">
                    {links[k]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {t.footer.contact}
            </div>
            <ul className="space-y-3 text-sm text-pearl/80">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-gold" /> +971 XX XXX XXXX
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" /> hello@example.com
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-gold" />
                <a
                  href="https://www.instagram.com/mmpersonaltraining/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  @mmpersonaltraining
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> {t.footer.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 gold-divider opacity-50" />
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-pearl/50">
          <span>
            © {new Date().getFullYear()} Mohammad Moslem. {t.footer.rights}.
          </span>
          <span>Dubai · UAE</span>
        </div>
      </div>
    </footer>
  );
}
