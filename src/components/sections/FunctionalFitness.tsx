import { useLang } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TennisBall3D } from "@/components/ui/TennisBall3D";

const functionalFitnessImage = "/image/functional%20fitnes/fitnes-tenis-1.webp";

export function FunctionalFitness() {
  const { t } = useLang();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <Reveal>
            <div
              className="relative aspect-square overflow-hidden rounded-[40px] border border-gold/25"
              style={{
                background:
                  "radial-gradient(120% 80% at 30% 30%, oklch(0.95 0.02 80) 0%, oklch(0.86 0.05 78) 60%, oklch(0.7 0.07 72) 100%)",
              }}
            >
              <img
                src={functionalFitnessImage}
                alt="Functional fitness training for tennis performance"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/25 via-transparent to-pearl/10" />
              <div className="absolute top-6 end-6">
                <TennisBall3D size={56} />
              </div>
              <div className="absolute bottom-5 start-5 rounded-full border border-gold/40 bg-pearl/85 px-3 py-1 text-[11px] uppercase leading-relaxed tracking-[0.2em] text-midnight">
                Tennis × Fitness
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading kicker={t.fitness.kicker} title={t.fitness.title} align="start" />
            <p className="mt-6 text-[15px] text-midnight/75 leading-relaxed max-w-xl">
              {t.fitness.body}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.fitness.cards.map((c, i) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-midnight/10 bg-pearl p-4 transition hover:border-gold/40"
                >
                  <div className="font-display text-3xl text-gold">0{i + 1}</div>
                  <div className="mt-2 text-sm font-medium text-midnight">{c.t}</div>
                  <div className="mt-1 text-xs text-midnight/60 leading-relaxed">{c.d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
