import { useLang } from "@/i18n/LanguageProvider";

export function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-gold/40 bg-pearl/70 ${compact ? "p-0.5 text-[11px]" : "p-1 text-xs"}`}
    >
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={`rounded-full px-2.5 py-1 transition ${lang === "ar" ? "bg-midnight text-pearl" : "text-midnight/70 hover:text-midnight"}`}
        aria-pressed={lang === "ar"}
      >
        العربية
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-2.5 py-1 transition ${lang === "en" ? "bg-midnight text-pearl" : "text-midnight/70 hover:text-midnight"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
