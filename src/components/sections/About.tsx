import { Quote } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StringPattern, CourtLines } from "@/components/ornaments/Ornaments";

const aboutImage = "/image/about us/about-tenis-couch-1.webp";

export function About() {
  const { t, lang } = useLang();
  const stats = [
    { n: "MSc", l: lang === "ar" ? "فسيولوجيا الرياضة" : "Sports Physiology" },
    { n: "1:1", l: lang === "ar" ? "تدريب خاص" : "Private Coaching" },
    { n: "DXB", l: lang === "ar" ? "دبي" : "Dubai" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <StringPattern className="absolute inset-0 opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 items-center">
          {/* Portrait */}
          <Reveal>
            <div className="mx-auto w-full max-w-[380px]">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] border border-gold/25"
                style={{
                  background:
                    "linear-gradient(170deg, oklch(0.92 0.02 80) 0%, oklch(0.78 0.06 72) 100%)",
                }}
              >
                <img
                  src={aboutImage}
                  alt="Private tennis coach in Dubai"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 text-midnight/15">
                  <CourtLines className="absolute -bottom-6 w-full" />
                </div>
              </div>
              {/* Badges */}
              <div className="mx-auto mt-4 flex w-full max-w-[340px] flex-wrap justify-center gap-2 px-2">
                {t.about.badges.map((b) => (
                  <span
                    key={b}
                    className="max-w-full rounded-full border border-gold/40 bg-pearl px-3 py-1.5 text-center text-[11px] leading-relaxed text-midnight/80 shadow-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <SectionHeading
              kicker={t.about.kicker}
              title={t.about.title}
              sub={t.about.sub}
              align="start"
            />
            <p className="mt-6 text-[15px] sm:text-base text-midnight/75 leading-relaxed max-w-xl">
              {t.about.body}
            </p>

            <div className="mt-8 relative rounded-3xl border border-gold/30 bg-pearl/80 p-6 sm:p-7 max-w-xl">
              <Quote className="absolute -top-3 start-5 h-7 w-7 rounded-full bg-pearl p-1.5 text-gold border border-gold/40" />
              <p className="font-display text-lg leading-loose text-midnight/90 text-balance sm:text-xl">
                {t.about.quote}
              </p>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-gold">
                — Mohammad Moslem
              </div>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.n}
                  className="flex min-h-[92px] min-w-0 flex-col justify-between rounded-2xl border border-midnight/10 bg-pearl/70 px-4 py-4 text-start shadow-sm"
                >
                  <div className="font-display text-2xl leading-none text-gold">{s.n}</div>
                  <div className="mt-3 min-w-0 text-sm leading-relaxed text-midnight/65">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
