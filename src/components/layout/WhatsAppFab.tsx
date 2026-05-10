import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

export function WhatsAppFab() {
  const { t } = useLang();
  return (
    <a
      href="https://wa.me/971000000000"
      target="_blank"
      rel="noreferrer"
      aria-label={t.cta.whatsapp}
      className="fixed bottom-5 end-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.6)] ring-2 ring-gold/40 transition hover:scale-105 md:inline-flex"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[#25D366]/40 animate-ping opacity-40" />
    </a>
  );
}
