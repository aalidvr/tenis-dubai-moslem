import { Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CourtLines } from "@/components/ornaments/Ornaments";

const dubaiLifestyleImage = "/image/dubai%20lifestyle/private-tennis-lifestyle-1.webp";

export function DubaiLifestyle() {
  const { t } = useLang();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <Reveal>
            <SectionHeading kicker={t.lifestyle.kicker} title={t.lifestyle.title} align="start" />
            <ul className="mt-8 space-y-4">
              {t.lifestyle.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full border border-gold/50">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  <span className="text-[15px] text-midnight/80">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {t.lifestyle.locations.map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-midnight/15 bg-pearl px-3.5 py-1.5 text-xs text-midnight/75"
                >
                  {loc}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="relative aspect-[4/5] sm:aspect-[5/5] overflow-hidden rounded-[40px] border border-gold/25"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.93 0.03 80) 0%, oklch(0.82 0.06 72) 60%, oklch(0.65 0.08 70) 100%)",
              }}
            >
              <img
                src={dubaiLifestyleImage}
                alt="Luxury private tennis lifestyle in Dubai"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/25 via-transparent to-pearl/10" />
              <div className="absolute inset-0 text-midnight/10">
                <CourtLines className="absolute inset-x-0 bottom-0 w-full" />
              </div>
              <div className="absolute top-6 start-6 rounded-full border border-gold/40 bg-pearl/85 px-3 py-1 text-[11px] uppercase leading-relaxed tracking-[0.25em] text-midnight backdrop-blur">
                Dubai · UAE
              </div>
              <div className="absolute bottom-6 end-6 text-end">
                <div className="font-display text-2xl text-midnight">25.2°N</div>
                <div className="text-[11px] uppercase leading-relaxed tracking-[0.2em] text-midnight/60">
                  55.27°E
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
