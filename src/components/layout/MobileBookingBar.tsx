import { CalendarCheck, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

export function MobileBookingBar() {
  const { t, lang } = useLang();

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
      <div className="glass-pill grid grid-cols-[1fr_auto] items-center gap-2 rounded-full p-1.5 ps-4 shadow-[0_18px_40px_-22px_rgba(8,17,29,0.55)]">
        <a href="#booking" className="min-w-0">
          <span className="block truncate text-[11px] text-midnight/55">
            {lang === "ar" ? "جاهز لتجربة خاصة؟" : "Ready for a private session?"}
          </span>
          <span className="flex items-center gap-1.5 text-sm font-medium text-midnight">
            <CalendarCheck className="h-3.5 w-3.5 text-gold" />
            {t.cta.book}
          </span>
        </a>
        <a
          href="https://wa.me/971000000000"
          target="_blank"
          rel="noreferrer"
          aria-label={t.cta.whatsapp}
          className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white shadow-sm"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
