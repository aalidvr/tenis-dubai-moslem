import { ArrowUpRight, Crosshair, TrendingUp, Dumbbell, Sun } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Crosshair, TrendingUp, Dumbbell, Sun];

export function Services() {
  const { t, dir, lang } = useLang();
  return (
    <section id="services" className="relative overflow-hidden bg-sand/40 py-24 md:py-32">
      <div className="pointer-events-none absolute -start-32 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute end-0 bottom-0 h-96 w-96 rounded-full bg-court/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={t.services.kicker} title={t.services.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.t} delay={i * 80}>
                <article className="group relative h-full overflow-hidden rounded-[30px] border border-midnight/10 bg-pearl/90 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_60px_-30px_rgba(8,17,29,0.35)]">
                  <div className="pointer-events-none absolute -end-12 -top-12 h-28 w-28 rounded-full border border-gold/20 transition group-hover:scale-110" />
                  <span className="absolute inset-x-7 top-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/40 bg-pearl text-gold">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </div>
                    <span className="font-display text-xs text-midnight/30">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl leading-snug text-midnight sm:text-2xl">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-[14px] text-midnight/70 leading-relaxed">{s.d}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(lang === "ar"
                      ? ["خاص", "دبي", "حسب المستوى"]
                      : ["Private", "Dubai", "Level-based"]
                    ).map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-midnight/10 px-2.5 py-1 text-[11px] text-midnight/55"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#booking"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-midnight group/link"
                  >
                    <span className="border-b border-gold/0 group-hover/link:border-gold transition">
                      {t.cta.learnMore}
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 text-gold transition-transform group-hover/link:translate-x-0.5 ${dir === "rtl" ? "-scale-x-100" : ""}`}
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
