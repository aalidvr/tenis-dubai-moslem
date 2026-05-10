import { GraduationCap, User, Users, Activity, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

const icons = [GraduationCap, User, Users, Activity, MapPin];
const marks = ["MSc", "1:1", "All", "+", "DXB"];

export function TrustBar() {
  const { t } = useLang();
  return (
    <section className="relative -mt-10 px-3 md:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-gold/25 bg-pearl/90 px-4 py-5 shadow-[0_10px_40px_-20px_rgba(8,17,29,0.25)] backdrop-blur">
        <div className="no-scrollbar flex gap-3 overflow-x-auto md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
          {t.trust.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item}
                className="group flex min-w-[185px] shrink-0 items-center gap-3 rounded-2xl border border-transparent px-3 py-2 transition hover:border-gold/25 hover:bg-white/35 md:min-w-0 md:shrink"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-white/35 text-gold transition group-hover:bg-gold/10">
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </div>
                <div>
                  <div className="font-display text-sm text-gold">{marks[i]}</div>
                  <span className="text-[13px] leading-relaxed text-midnight/80">{item}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
