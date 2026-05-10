import {
  ArrowRight,
  CalendarDays,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { TennisBall3D } from "@/components/ui/TennisBall3D";
import {
  SkylineLineArt,
  MotionArc,
  CourtLines,
  RacketCurve,
} from "@/components/ornaments/Ornaments";

const heroImages = {
  en: "/image/hero/english version/hero-tenis-sample-site-2.webp",
  ar: "/image/hero/arabi version/hero-tenis-sample-site-2.webp",
  mobile: "/image/hero/mobile version/hero-tenis-sample-site-1.webp",
};

export function Hero() {
  const { t, lang, dir } = useLang();
  const heroImage = lang === "ar" ? heroImages.ar : heroImages.en;
  const heroObjectPosition = "object-[70%_center]";
  const isRtl = dir === "rtl";
  const textOrder = isRtl ? "md:order-2" : "md:order-1";
  const visualOrder = isRtl ? "md:order-1" : "md:order-2";
  const gridGap = isRtl ? "md:gap-20 lg:gap-24" : "md:gap-14 lg:gap-16";

  return (
    <section
      id="home"
      dir={dir}
      data-hero-locale={lang}
      className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
      style={{
        background:
          "radial-gradient(70% 55% at 68% 10%, color-mix(in oklab, var(--sand) 42%, var(--pearl)) 0%, transparent 64%), radial-gradient(45% 45% at 10% 10%, color-mix(in oklab, var(--gold) 16%, transparent) 0%, transparent 65%), linear-gradient(180deg, var(--pearl) 0%, color-mix(in oklab, var(--sand) 16%, var(--pearl)) 100%)",
      }}
    >
      {/* Background ornaments */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -start-28 top-28 h-[360px] w-[360px] rounded-full border border-gold/15" />
        <div className="absolute end-[-8rem] top-16 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(201,161,93,.13),transparent_62%)]" />
        <div className="absolute inset-x-0 bottom-0 text-midnight/12">
          <SkylineLineArt className="mx-auto w-full max-w-5xl" />
        </div>
        <div className="absolute inset-0 text-gold/10">
          <CourtLines className="absolute -bottom-24 start-1/2 w-[980px] -translate-x-1/2 opacity-55" />
        </div>
        <div className="absolute start-0 top-24 hidden h-[70%] w-20 bg-gradient-to-b from-transparent via-gold/10 to-transparent md:block" />
        <div className="palm-pattern absolute inset-0 opacity-[0.12]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-pearl/80 to-transparent" />
        <div className="absolute bottom-16 start-1/2 h-28 w-[120%] -translate-x-1/2 rounded-[50%] border-t border-gold/20" />
        <div className="absolute bottom-4 start-1/2 h-32 w-[110%] -translate-x-1/2 rounded-[50%] border-t border-white/55" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div
          dir="ltr"
          className={`grid items-center gap-14 md:grid-cols-[0.96fr_1.04fr] ${gridGap}`}
        >
          {/* Text */}
          <div
            dir={dir}
            className={`reveal-in relative order-1 min-w-0 flex flex-col items-start gap-6 ${textOrder} ${
              isRtl ? "text-right md:ms-auto md:w-full md:max-w-[34rem] md:pe-6" : "text-left"
            }`}
          >
            <div
              className={`hidden items-center gap-3 text-[11px] text-midnight/45 md:flex ${
                isRtl ? "leading-6" : ""
              }`}
            >
              <span className="h-px w-12 bg-gold/60" />
              <span>{lang === "ar" ? "علامة شخصية خاصة" : "Private personal brand"}</span>
            </div>
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl/75 px-3.5 py-1.5 text-[11px] uppercase leading-relaxed tracking-[0.16em] text-midnight/75 shadow-sm backdrop-blur ${
                isRtl ? "text-[12px] font-medium leading-6" : ""
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {t.hero.badge}
            </span>

            <h1
              className={`font-display max-w-2xl text-4xl leading-[1.14] text-balance text-midnight sm:text-5xl md:text-6xl ${
                isRtl
                  ? "max-w-[18ch] !leading-[1.24] [word-spacing:0.06em] sm:!leading-[1.22] md:!leading-[1.18]"
                  : ""
              }`}
            >
              {t.hero.h1}
            </h1>
            <div
              className={`flex items-center gap-3 text-sm uppercase leading-relaxed tracking-[0.24em] text-gold/90 ${
                isRtl ? "text-[15px] font-medium leading-7" : ""
              }`}
            >
              <span className="h-px w-10 bg-gold/70" />
              {t.hero.with}
            </div>

            <p
              className={`max-w-xl text-base text-midnight/70 text-balance sm:text-lg ${
                isRtl ? "max-w-[54ch] !leading-8 sm:!leading-9 [word-spacing:0.04em]" : ""
              }`}
            >
              {t.hero.sub}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className={`inline-flex items-center gap-2 rounded-full border border-gold/30 bg-midnight px-6 py-3.5 text-sm font-medium text-pearl shadow-[0_18px_34px_-24px_rgba(8,17,29,.85)] transition hover:border-gold hover:shadow-[0_18px_36px_-24px_rgba(201,161,93,.95)] ${
                  isRtl ? "text-[15px] leading-7" : ""
                }`}
              >
                {t.cta.book}
                <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
              </a>
              <a
                href="#services"
                className={`inline-flex items-center gap-2 rounded-full border border-midnight/15 bg-pearl/60 px-6 py-3.5 text-sm font-medium text-midnight transition hover:border-gold/60 ${
                  isRtl ? "text-[15px] leading-7" : ""
                }`}
              >
                {t.cta.explore}
              </a>
              <a
                href="https://wa.me/971000000000"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2.5 rounded-full border border-[#25D366]/35 bg-[#25D366]/10 px-4 py-2.5 text-sm font-medium text-midnight shadow-[0_14px_28px_-22px_rgba(37,211,102,.95)] transition hover:border-[#25D366]/55 hover:bg-[#25D366]/16 hover:shadow-[0_18px_34px_-22px_rgba(37,211,102,.95)] ${
                  isRtl ? "text-[15px] leading-7" : ""
                }`}
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#25D366]/20">
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                </span>
                <span className="border-b border-[#25D366]/45 pb-0.5 text-midnight">
                  {t.cta.whatsapp}
                </span>
              </a>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-midnight/55">
              <div
                className={`flex items-center gap-2 leading-relaxed ${
                  isRtl ? "text-[13px] leading-6" : ""
                }`}
              >
                <span className="h-px w-8 bg-gold/60" />
                {lang === "ar" ? "ماجستير في فسيولوجيا الرياضة" : "MSc Sports Physiology"}
              </div>
              <div
                className={`hidden items-center gap-2 leading-relaxed sm:flex ${
                  isRtl ? "text-[13px] leading-6" : ""
                }`}
              >
                <span className="h-px w-8 bg-gold/60" />
                {lang === "ar" ? "تدريب خاص 1:1" : "Private 1:1"}
              </div>
            </div>

            <div className="grid w-full max-w-xl gap-3 pt-2 sm:grid-cols-3">
              {[
                {
                  icon: Sparkles,
                  value: lang === "ar" ? "خاص" : "Private",
                  label: lang === "ar" ? "جلسات شخصية" : "Personal sessions",
                },
                {
                  icon: CalendarDays,
                  value: lang === "ar" ? "مرن" : "Flexible",
                  label: lang === "ar" ? "حسب جدولك" : "Around your schedule",
                },
                {
                  icon: MapPin,
                  value: "Dubai",
                  label: lang === "ar" ? "مواقع مختارة" : "Selected locations",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-midnight/10 bg-pearl/55 px-4 py-3 backdrop-blur transition hover:border-gold/45"
                  >
                    <div className="flex items-center gap-2 text-gold">
                      <Icon className="h-4 w-4" strokeWidth={1.4} />
                      <span
                        className={`font-display text-lg text-midnight ${
                          isRtl ? "!leading-7" : ""
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                    <div
                      className={`mt-1 text-xs leading-relaxed text-midnight/55 ${
                        isRtl ? "text-[13px] leading-6" : ""
                      }`}
                    >
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <div
            dir="ltr"
            className={`relative order-2 min-w-0 ${visualOrder} ${isRtl ? "md:ps-3" : ""}`}
          >
            <div className="relative mx-auto min-h-[450px] w-full max-w-[520px] min-[380px]:min-h-[500px] sm:min-h-[600px]">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/40 via-pearl/30 to-sand/35 shadow-[0_34px_80px_-58px_rgba(8,17,29,.55)]" />
              <div className="absolute start-4 top-7 h-[78%] w-[82%] rotate-[-4deg] rounded-[2.7rem] border border-gold/25 bg-pearl/55 backdrop-blur-sm sm:start-10 sm:top-8 sm:h-[82%] sm:w-[78%] sm:rounded-[3.5rem]" />
              <div className="absolute end-0 top-12 h-[76%] w-[68%] rounded-[3rem] bg-midnight/[0.055]" />

              <div className="pointer-events-none absolute -inset-8 text-gold/55">
                <MotionArc className="absolute inset-0 h-full w-full" />
              </div>

              <div className="pointer-events-none absolute -start-8 bottom-24 hidden h-64 w-44 text-midnight/10 sm:block">
                <RacketCurve className="h-full w-full" />
              </div>

              {/* Portrait card */}
              <div
                className="absolute start-1/2 top-7 h-[72%] w-[74%] -translate-x-1/2 overflow-hidden rounded-[46%_46%_34%_34%/34%_34%_18%_18%] border border-gold/30 shadow-[0_34px_70px_-42px_rgba(8,17,29,.62)] sm:top-7 sm:h-[78%] sm:w-[76%]"
                style={{
                  background:
                    "linear-gradient(160deg, var(--sand) 0%, color-mix(in oklab, var(--sand-deep) 70%, var(--pearl)) 52%, var(--court) 100%)",
                }}
              >
                <picture className="absolute inset-0">
                  <source media="(max-width: 767px)" srcSet={heroImages.mobile} />
                  <img
                    src={heroImage}
                    alt={
                      lang === "ar"
                        ? "مدرب تنس خاص في دبي"
                        : "Private tennis coach in Dubai"
                    }
                    className={`h-full w-full object-cover ${heroObjectPosition}`}
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 via-transparent to-pearl/10" />
                {/* Subtle court lines overlay */}
                <div className="absolute inset-0 text-pearl/25">
                  <CourtLines className="absolute -bottom-12 -end-12 w-[142%]" />
                </div>
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-pearl/30 to-transparent" />
                <div className="absolute -start-12 top-24 h-40 w-40 rounded-full border border-pearl/20" />
              </div>

              <div className="absolute right-2 top-0 sm:right-6">
                <TennisBall3D size={64} />
              </div>

              <div
                dir={dir}
                className={`absolute top-24 max-w-[150px] rounded-3xl border border-gold/30 bg-pearl/88 p-3 shadow-[0_22px_54px_-36px_rgba(8,17,29,.7)] backdrop-blur sm:top-28 sm:max-w-[170px] sm:p-4 ${
                  isRtl ? "left-0 text-right" : "left-0 text-left"
                }`}
              >
                <div className="flex items-center gap-2 text-gold">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.4} />
                  <span className="font-display text-lg leading-none text-midnight">1:1</span>
                </div>
                <div
                  className={`mt-2 text-xs leading-relaxed text-midnight/60 ${
                    isRtl ? "text-[13px] leading-6" : ""
                  }`}
                >
                  {lang === "ar"
                    ? "تدريب خاص بعيد عن ازدحام المجموعات"
                    : "Private coaching away from crowded groups"}
                </div>
              </div>

              <div
                dir={dir}
                className={`absolute bottom-12 max-w-[185px] rotate-[-2deg] rounded-[1.75rem] border border-gold/30 bg-pearl/90 p-3 shadow-[0_26px_62px_-42px_rgba(8,17,29,.7)] backdrop-blur sm:bottom-16 sm:max-w-[210px] sm:p-4 ${
                  isRtl ? "right-0 text-right" : "left-0 text-left"
                }`}
              >
                <div className="text-[10px] uppercase leading-relaxed tracking-[0.24em] text-gold">
                  Dubai
                </div>
                <div
                  className={`mt-1 text-sm font-medium leading-relaxed text-midnight ${
                    isRtl ? "text-[15px] leading-7" : ""
                  }`}
                >
                  {lang === "ar" ? "تنس · أداء · أسلوب حياة" : "Tennis · Performance · Lifestyle"}
                </div>
              </div>

              <div
                dir={dir}
                className={`absolute bottom-0 hidden w-[56%] rounded-[2rem] border border-midnight/10 bg-midnight px-5 py-4 text-pearl shadow-[0_24px_70px_-44px_rgba(8,17,29,.9)] sm:block ${
                  isRtl ? "left-6 text-right" : "right-6 text-left"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase leading-relaxed tracking-[0.22em] text-gold">
                      Method
                    </div>
                    <div
                      className={`mt-1 text-sm leading-relaxed text-pearl/82 ${
                        isRtl ? "text-[15px] leading-7" : ""
                      }`}
                    >
                      {lang === "ar" ? "تقنية، حركة، ثقة" : "Technique, movement, confidence"}
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-full border border-gold/35 bg-[radial-gradient(circle_at_32%_30%,#F8F5F0_0_9%,#C9A15D_10%,transparent_55%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
