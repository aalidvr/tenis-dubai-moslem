import { useState, type FormEvent } from "react";
import { Check, Clock, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { useLang } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TennisBall3D } from "@/components/ui/TennisBall3D";

export function Booking() {
  const { t, lang } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const f = t.booking.fields;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success(t.booking.success);
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="booking" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute -end-28 top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center">
          <SectionHeading kicker={t.booking.kicker} title={t.booking.title} sub={t.booking.body} />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12 items-start">
          <Reveal>
            <div className="rounded-[32px] border border-midnight/10 bg-pearl p-7 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-4 -end-4">
                <TennisBall3D size={48} />
              </div>
              <div
                className={`text-xs uppercase text-gold ${lang === "ar" ? "tracking-normal" : "tracking-[0.25em]"}`}
              >
                {lang === "ar" ? "لماذا الحجز" : "Why book"}
              </div>
              <ul className="mt-5 space-y-3.5">
                {t.booking.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full border border-gold/50">
                      <Check className="h-3 w-3 text-gold" />
                    </span>
                    <span className="text-[14px] text-midnight/85">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-midnight/10 bg-white/35 p-4">
                  <Clock className="h-4 w-4 text-gold" strokeWidth={1.4} />
                  <div className="mt-2 text-sm font-medium text-midnight">
                    {lang === "ar" ? "استجابة سريعة" : "Fast response"}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-midnight/55">
                    {lang === "ar" ? "عبر واتساب أو البريد" : "Via WhatsApp or email"}
                  </div>
                </div>
                <div className="rounded-2xl border border-midnight/10 bg-white/35 p-4">
                  <ShieldCheck className="h-4 w-4 text-gold" strokeWidth={1.4} />
                  <div className="mt-2 text-sm font-medium text-midnight">
                    {lang === "ar" ? "تجربة خاصة" : "Private experience"}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-midnight/55">
                    {lang === "ar" ? "بدون مجموعات مزدحمة" : "No crowded groups"}
                  </div>
                </div>
              </div>
              <div className="gold-divider my-7 opacity-60" />
              <a
                href="https://wa.me/971000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                {t.cta.orWhatsapp}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="relative rounded-[32px] border border-gold/30 bg-pearl p-6 shadow-[0_30px_60px_-30px_rgba(8,17,29,0.25)] sm:p-8"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="font-display text-xl leading-snug text-midnight">
                    {lang === "ar" ? "طلب حجز خاص" : "Private Booking Request"}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-midnight/55">
                    {lang === "ar"
                      ? "البيانات placeholders ويمكن ربطها لاحقاً."
                      : "Placeholder flow ready for real contact details."}
                  </div>
                </div>
                <span className="hidden rounded-full border border-gold/35 px-3 py-1 text-[11px] text-gold sm:inline-flex">
                  MM
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={f.name} lang={lang}>
                  <input required name="name" className={inputCls} />
                </Field>
                <Field label={f.phone} lang={lang}>
                  <input required name="phone" className={inputCls} />
                </Field>
                <Field label={f.email} lang={lang}>
                  <input required type="email" name="email" className={inputCls} />
                </Field>
                <Field label={f.location} lang={lang}>
                  <input name="location" className={inputCls} />
                </Field>
                <Field label={f.program} lang={lang}>
                  <select name="program" className={inputCls} defaultValue="">
                    <option value="" disabled></option>
                    {t.booking.programs.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field label={f.level} lang={lang}>
                  <select name="level" className={inputCls} defaultValue="">
                    <option value="" disabled></option>
                    {t.booking.levels.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </Field>
                <Field label={f.time} lang={lang} className="sm:col-span-2">
                  <input name="time" placeholder="—" className={inputCls} />
                </Field>
                <Field label={f.message} lang={lang} className="sm:col-span-2">
                  <textarea name="message" rows={4} className={`${inputCls} resize-none`} />
                </Field>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-midnight px-6 py-4 text-sm font-medium text-pearl transition gold-glow disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {submitting ? "..." : t.cta.send}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-2xl border border-midnight/15 bg-pearl px-4 py-3 text-sm text-midnight outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-midnight/40";

function Field({
  label,
  children,
  className = "",
  lang,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  lang: "ar" | "en";
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span
        className={`text-[11px] uppercase text-midnight/55 ${lang === "ar" ? "tracking-normal" : "tracking-[0.2em]"}`}
      >
        {label}
      </span>
      {children}
    </label>
  );
}
