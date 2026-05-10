import { useLang } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Method() {
  const { t, lang } = useLang();
  return (
    <section id="method" className="relative bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={t.method.kicker} title={t.method.title} />

        <div className="relative mt-16">
          {/* Desktop connector */}
          <div className="pointer-events-none absolute start-0 end-0 top-[64px] hidden md:block">
            <div className="mx-auto h-px max-w-[88%] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          </div>
          <div className="pointer-events-none absolute bottom-8 start-[5px] top-10 w-px bg-gradient-to-b from-gold/70 via-gold/35 to-transparent md:hidden" />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {t.method.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative flex flex-col items-start ps-8 text-start md:items-center md:ps-0 md:text-center">
                  <span className="absolute start-0 top-12 grid h-3 w-3 rounded-full bg-gold ring-4 ring-pearl md:hidden" />
                  <div className="relative">
                    <span className="font-display text-[68px] leading-none text-midnight/10">
                      {s.n}
                    </span>
                    <span
                      className={`absolute inset-0 grid place-items-center font-display text-sm text-gold ${lang === "ar" ? "tracking-normal" : "tracking-[0.25em]"}`}
                    >
                      {lang === "ar" ? "خطوة" : "STEP"}
                    </span>
                  </div>
                  <div className="mt-4 hidden h-3 w-3 place-items-center rounded-full bg-gold ring-4 ring-pearl md:grid" />
                  <h3 className="mt-5 font-display text-xl leading-snug text-midnight">{s.t}</h3>
                  <p className="mt-3 text-sm text-midnight/70 max-w-[260px] leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
