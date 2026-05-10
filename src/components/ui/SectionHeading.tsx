import type { ReactNode } from "react";
import { useLang } from "@/i18n/LanguageProvider";

export function SectionHeading({
  kicker,
  title,
  sub,
  align = "center",
}: {
  kicker?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "start";
}) {
  const { lang } = useLang();
  const alignCls = align === "center" ? "text-center items-center" : "text-start items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      {kicker && (
        <span
          className={`inline-flex items-center gap-2 text-xs uppercase text-gold ${lang === "ar" ? "tracking-normal" : "tracking-[0.25em]"}`}
        >
          <span className="h-px w-6 bg-gold" />
          {kicker}
        </span>
      )}
      <h2 className="font-display text-3xl leading-[1.25] text-balance text-midnight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {sub && <p className="max-w-2xl text-muted-foreground text-base sm:text-lg">{sub}</p>}
    </div>
  );
}
