import { Instagram, Play, ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CourtLines } from "@/components/ornaments/Ornaments";

const gradients = [
  "linear-gradient(160deg, oklch(0.86 0.04 78), oklch(0.6 0.08 72))",
  "linear-gradient(160deg, oklch(0.78 0.06 72), oklch(0.5 0.07 145))",
  "linear-gradient(160deg, oklch(0.92 0.02 80), oklch(0.74 0.13 130))",
  "linear-gradient(160deg, oklch(0.6 0.08 65), oklch(0.18 0.025 254))",
  "linear-gradient(160deg, oklch(0.88 0.04 80), oklch(0.5 0.07 145))",
  "linear-gradient(160deg, oklch(0.78 0.06 72), oklch(0.18 0.025 254))",
];

const galleryImages = [
  "/image/tenis time/tenis-court-and-time-site-1.webp",
  "/image/tenis time/tenis-court-and-time-site-2.webp",
  "/image/tenis time/tenis-court-and-time-site-4.webp",
  "/image/tenis time/tenis-court-and-time-site-5.webp",
  "/image/tenis time/tenis-court-and-time-site-6.webp",
];

export function Gallery() {
  const { t } = useLang();
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center">
          <SectionHeading kicker={t.gallery.kicker} title={t.gallery.title} />
        </div>

        {/* Mobile: snap scroll */}
        <div className="no-scrollbar mt-12 -mx-6 px-6 flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory">
          {t.gallery.tiles.map((tile, i) => (
            <Tile
              key={tile}
              label={tile}
              grad={gradients[i]}
              image={galleryImages[i % galleryImages.length]}
              className="snap-center min-w-[78%] aspect-[4/5]"
            />
          ))}
        </div>

        {/* Desktop: asymmetric grid */}
        <div className="mt-12 hidden md:grid grid-cols-6 grid-rows-2 gap-4 h-[560px]">
          <Tile
            label={t.gallery.tiles[0]}
            grad={gradients[0]}
            image={galleryImages[0]}
            className="col-span-2 row-span-2"
          />
          <Tile
            label={t.gallery.tiles[1]}
            grad={gradients[1]}
            image={galleryImages[1]}
            className="col-span-2 row-span-1"
          />
          <Tile
            label={t.gallery.tiles[2]}
            grad={gradients[2]}
            image={galleryImages[2]}
            className="col-span-2 row-span-1"
          />
          <Tile
            label={t.gallery.tiles[3]}
            grad={gradients[3]}
            image={galleryImages[3]}
            className="col-span-1 row-span-1"
          />
          <ReelsTile label={t.gallery.reels} className="col-span-2 row-span-1" />
          <Tile
            label={t.gallery.tiles[5]}
            grad={gradients[5]}
            image={galleryImages[4]}
            className="col-span-1 row-span-1"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.instagram.com/mmpersonaltraining/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-5 py-3 text-sm text-midnight transition hover:border-gold"
          >
            <Instagram className="h-4 w-4 text-gold" />
            {t.cta.viewIg}
            <ArrowUpRight className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Tile({
  label,
  grad,
  image,
  className = "",
}: {
  label: string;
  grad: string;
  image: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div
        className="group relative h-full w-full overflow-hidden rounded-[28px] border border-midnight/10"
        style={{ background: grad }}
      >
        <img
          src={image}
          alt={`Dubai tennis coaching gallery - ${label}`}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/35 via-midnight/5 to-transparent" />
        <div className="absolute inset-0 text-pearl/20">
          <CourtLines className="absolute -bottom-6 -end-6 w-[120%]" />
        </div>
        <div className="absolute bottom-3 start-3 rounded-full bg-pearl/85 px-3 py-1 text-[11px] text-midnight backdrop-blur">
          {label}
        </div>
      </div>
    </Reveal>
  );
}

function ReelsTile({ label, className = "" }: { label: string; className?: string }) {
  return (
    <Reveal className={className}>
      <a
        href="https://www.instagram.com/mmpersonaltraining/"
        target="_blank"
        rel="noreferrer"
        className="group relative grid h-full w-full place-items-center overflow-hidden rounded-[28px] border border-gold/40 bg-midnight text-pearl"
      >
        <div className="absolute inset-0 opacity-30 text-gold">
          <CourtLines className="absolute inset-0 w-full h-full" />
        </div>
        <div className="relative flex flex-col items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-midnight/60 text-gold transition group-hover:scale-110">
            <Play className="h-5 w-5 ms-0.5" />
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">@mmpersonaltraining</div>
          <div className="text-sm text-pearl/85">{label}</div>
        </div>
      </a>
    </Reveal>
  );
}
