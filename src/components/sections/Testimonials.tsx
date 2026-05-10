import { Quote, Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const { t } = useLang();
  return (
    <section className="relative bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center">
          <SectionHeading kicker={t.testimonials.kicker} title={t.testimonials.title} />
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((it, i) => (
            <Reveal key={it.n} delay={i * 100}>
              <article className="relative h-full rounded-[28px] border border-midnight/10 bg-pearl p-7">
                <Quote className="absolute -top-3 start-6 h-7 w-7 rounded-full border border-gold/40 bg-pearl p-1.5 text-gold" />
                <div className="flex gap-0.5 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-[15px] text-midnight/80 leading-relaxed text-balance">
                  "{it.q}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-midnight text-pearl text-xs font-medium">
                    {it.n.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-midnight">{it.n}</div>
                    <div className="text-[11px] text-midnight/55">{it.l}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
