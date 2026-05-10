import { Instagram, ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";

const instagramImage = "/image/instagram/tennis-insta-1.webp";

export function InstagramCTA() {
  const { t } = useLang();
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center rounded-[36px] border border-gold/25 bg-pearl p-6 sm:p-10">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Instagram</div>
              <h3 className="mt-3 font-display text-2xl leading-snug text-midnight text-balance sm:text-3xl">
                {t.instagram.title}
              </h3>
              <div className="mt-4 text-sm text-midnight/65">@mmpersonaltraining</div>
              <a
                href="https://www.instagram.com/mmpersonaltraining/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-midnight px-5 py-3 text-sm text-pearl transition gold-glow"
              >
                <Instagram className="h-4 w-4" />
                {t.cta.visitIg}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mock IG preview */}
            <div
              className="relative aspect-square rounded-[28px] overflow-hidden border border-midnight/10"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.78 0.06 72) 0%, oklch(0.5 0.07 145) 100%)",
              }}
            >
              <img
                src={instagramImage}
                alt="Mohammad Moslem tennis training Instagram content"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/35 via-midnight/5 to-transparent" />
              <div className="absolute top-3 start-3 right-3 flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-pearl/90 grid place-items-center font-display text-[10px] text-midnight">
                  MM
                </div>
                <div className="text-[11px] text-pearl">@mmpersonaltraining</div>
              </div>
              <div className="absolute bottom-3 start-3 right-3 flex items-center gap-3 text-pearl/90 text-xs">
                <span className="inline-flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" /> 1.2k
                </span>
                <span className="inline-flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" /> 48
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
