import { useState } from "react";
import {
  Sparkles,
  Heart,
  ShoppingBag,
  Shirt,
  Gem,
  ArrowUpRight,
  Check,
} from "lucide-react";

const loaders = [
  {
    id: 1,
    title: "Soft Dot Wave",
    subtitle: "Gentle & minimal",
    description: "Soft dots flow in a delicate rhythm.",
  },
  {
    id: 2,
    title: "Fashion Editorial",
    subtitle: "Modern & stylish",
    description: "Editorial-inspired vertical bars.",
  },
  {
    id: 3,
    title: "Silk Line",
    subtitle: "Quiet luxury",
    description: "A fine line with a moving shimmer.",
  },
  {
    id: 4,
    title: "Luxury Sparkles",
    subtitle: "Elegant & feminine",
    description: "Twinkling accents with a soft glow.",
  },
  {
    id: 5,
    title: "Segmented Progress",
    subtitle: "Clean & structured",
    description: "Small segments light up in sequence.",
  },
  {
    id: 6,
    title: "Boutique Pulse",
    subtitle: "Cute & premium",
    description: "A tiny heart pulses softly.",
  },
  {
    id: 7,
    title: "Pleated Motion",
    subtitle: "Inspired by fabric",
    description: "Flowing vertical lines move like pleats.",
  },
  {
    id: 8,
    title: "Brand Signature",
    subtitle: "Custom & distinctive",
    description: "A refined wordmark with animated accents.",
  },
];

function LoaderPreview({ id }) {
  switch (id) {
    case 1:
      return (
        <div className="flex items-center gap-2">
          {[0, 1, 2, 3, 4].map((n) => (
            <span
              key={n}
              className="gallery-dot h-2.5 w-2.5 rounded-full"
              style={{ animationDelay: `${n * 0.15}s` }}
            />
          ))}
        </div>
      );

    case 2:
      return (
        <div className="flex h-9 items-center gap-1.5">
          {[9, 16, 25, 34, 25, 16, 9].map((height, n) => (
            <span
              key={n}
              className="editorial-bar w-1 rounded-full"
              style={{
                height,
                animationDelay: `${n * 0.12}s`,
              }}
            />
          ))}
        </div>
      );

    case 3:
      return (
        <div className="silk-track relative h-[3px] w-40 overflow-hidden rounded-full">
          <span className="silk-shimmer absolute inset-y-0 w-12 rounded-full" />
        </div>
      );

    case 4:
      return (
        <div className="flex items-center gap-5">
          {[0, 1, 2].map((n) => (
            <Sparkles
              key={n}
              size={n === 1 ? 24 : 17}
              strokeWidth={1.4}
              className="sparkle-item text-[#c47ba1]"
              style={{ animationDelay: `${n * 0.3}s` }}
            />
          ))}
        </div>
      );

    case 5:
      return (
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 7 }).map((_, n) => (
            <span
              key={n}
              className="segment-item h-[4px] w-4 rounded-full"
              style={{ animationDelay: `${n * 0.16}s` }}
            />
          ))}
        </div>
      );

    case 6:
      return (
        <div className="relative flex h-12 w-12 items-center justify-center">
          <span className="pulse-halo absolute inset-1 rounded-full border border-[#e8bfd3]" />
          <Heart
            size={24}
            strokeWidth={1.4}
            className="heart-pulse relative text-[#c66d98]"
          />
        </div>
      );

    case 7:
      return (
        <div className="flex h-10 items-center gap-1.5">
          {[0, 1, 2, 3, 4].map((n) => (
            <span
              key={n}
              className="pleat-bar h-8 w-[3px] rounded-full"
              style={{ animationDelay: `${n * 0.13}s` }}
            />
          ))}
        </div>
      );

    case 8:
      return (
        <div className="flex items-center gap-2.5">
          <span className="brand-accent h-1.5 w-1.5 rounded-full" />
          <span className="font-serif text-sm tracking-[0.24em] text-[#80536d]">
            MRIDUL TAARA
          </span>
          <span className="brand-accent h-1.5 w-1.5 rounded-full" />
        </div>
      );

    default:
      return null;
  }
}

export default function LoaderGallery() {
  const [selected, setSelected] = useState(8);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf8] text-[#65475a]">
      <style>{`
        @keyframes galleryDot {
          0%, 100% {
            transform: translateY(0) scale(.8);
            background: #ead6e1;
            opacity: .6;
          }
          50% {
            transform: translateY(-5px) scale(1.2);
            background: #c66d98;
            opacity: 1;
            box-shadow: 0 0 12px #e7bfd3;
          }
        }

        @keyframes editorialBar {
          0%, 100% { transform: scaleY(.55); opacity: .55; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        @keyframes silkShimmer {
          0% { transform: translateX(-160%); }
          100% { transform: translateX(400%); }
        }

        @keyframes sparkleTwinkle {
          0%, 100% { transform: scale(.8) rotate(-10deg); opacity: .35; }
          50% { transform: scale(1.18) rotate(10deg); opacity: 1; }
        }

        @keyframes segmentLight {
          0%, 100% { background: #ead6e1; opacity: .6; }
          50% { background: #c66d98; opacity: 1; box-shadow: 0 0 8px #e7bfd3; }
        }

        @keyframes heartPulse {
          0%, 100% { transform: scale(.9); }
          50% { transform: scale(1.14); }
        }

        @keyframes haloPulse {
          0%, 100% { transform: scale(.85); opacity: .3; }
          50% { transform: scale(1.25); opacity: 1; }
        }

        @keyframes pleatMotion {
          0%, 100% { transform: scaleY(.45); opacity: .5; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        @keyframes brandGlow {
          0%, 100% { opacity: .4; box-shadow: 0 0 0 transparent; }
          50% { opacity: 1; box-shadow: 0 0 9px #d69ab9; }
        }

        .gallery-dot { animation: galleryDot 1s ease-in-out infinite; }
        .editorial-bar {
          background: #c78eae;
          transform-origin: center;
          animation: editorialBar 1s ease-in-out infinite;
        }
        .silk-track { background: #f0dfe8; }
        .silk-shimmer {
          background: linear-gradient(90deg, #e9c4d8, #b986ab, #ead1e0);
          animation: silkShimmer 1.6s ease-in-out infinite;
        }
        .sparkle-item { animation: sparkleTwinkle 1.5s ease-in-out infinite; }
        .segment-item { animation: segmentLight 1.15s ease-in-out infinite; }
        .heart-pulse { animation: heartPulse 1.2s ease-in-out infinite; }
        .pulse-halo { animation: haloPulse 1.5s ease-in-out infinite; }
        .pleat-bar {
          background: linear-gradient(to bottom, #d9b2cb, #b77ca0);
          transform-origin: center;
          animation: pleatMotion .9s ease-in-out infinite;
        }
        .brand-accent { animation: brandGlow 1.3s ease-in-out infinite; background: #c47ba1; }

        @media (prefers-reduced-motion: reduce) {
          .gallery-dot, .editorial-bar, .silk-shimmer,
          .sparkle-item, .segment-item, .heart-pulse,
          .pulse-halo, .pleat-bar, .brand-accent {
            animation: none !important;
          }
        }
      `}</style>

      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-28 h-80 w-80 rounded-full bg-[#f6dce8]/60 blur-[100px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#e8def7]/50 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#ffe6dc]/60 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        {/* Header */}
        <header className="mb-10 text-center sm:mb-14">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#d8afc5]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#a77b91]">
              Mridul Taara · Design Studio
            </span>
            <span className="h-px w-8 bg-[#d8afc5]" />
          </div>

          <h1 className="font-serif text-4xl font-normal tracking-tight text-[#69495d] sm:text-5xl lg:text-6xl">
            The Art of Waiting
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#9c7b8e] sm:text-base">
            Eight little loading moments, designed to make your
            fashion experience feel special.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#a77b91]">
            <Sparkles size={14} strokeWidth={1.5} />
            <span>Choose the signature that feels like you</span>
          </div>
        </header>

        {/* Gallery */}
        <section
          aria-label="Loader design options"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          {loaders.map((loader) => {
            const isSelected = selected === loader.id;

            return (
              <button
                key={loader.id}
                type="button"
                onClick={() => setSelected(loader.id)}
                aria-pressed={isSelected}
                className={`group relative flex min-h-[225px] flex-col overflow-hidden rounded-2xl border p-4 text-left transition duration-300 sm:min-h-[245px] sm:p-5 ${
                  isSelected
                    ? "border-[#c78eae] bg-white shadow-[0_12px_40px_rgba(175,112,148,0.14)] ring-1 ring-[#e8c8d9]"
                    : "border-[#f0e1e8] bg-white/70 hover:-translate-y-1 hover:border-[#dfb7cd] hover:bg-white hover:shadow-[0_12px_32px_rgba(175,112,148,0.09)]"
                }`}
              >
                {/* Selected label */}
                {isSelected && (
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#f8eaf1] px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-[#a15e84]">
                    <Check size={11} />
                    Selected
                  </span>
                )}

                {/* Preview */}
                <div className="mb-5 flex h-[112px] w-full items-center justify-center rounded-xl border border-[#f5e9ef] bg-[#fff9f7] sm:h-[125px]">
                  <LoaderPreview id={loader.id} />
                </div>

                {/* Card info */}
                <div className="mt-auto">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[10px] tabular-nums text-[#bd92aa]">
                      {String(loader.id).padStart(2, "0")}
                    </span>
                    <span className="h-px w-4 bg-[#e7cbd9]" />
                    <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#a77b91]">
                      {loader.subtitle}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-serif text-lg font-medium text-[#69495d] sm:text-xl">
                      {loader.title}
                    </h2>
                    <ArrowUpRight
                      size={16}
                      className={`shrink-0 transition ${
                        isSelected
                          ? "text-[#c47ba1]"
                          : "text-[#d4b4c6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                    />
                  </div>

                  <p className="mt-2 text-xs leading-5 text-[#a18796]">
                    {loader.description}
                  </p>
                </div>
              </button>
            );
          })}
        </section>

        {/* Selected design panel */}
        <section className="mt-7 rounded-2xl border border-[#eedce6] bg-white/80 p-5 sm:mt-9 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#b1849d]">
                Your current choice
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#69495d] sm:text-3xl">
                {loaders.find((item) => item.id === selected)?.title}
              </h2>
              <p className="mt-2 text-sm text-[#9c7b8e]">
                {loaders.find((item) => item.id === selected)?.description}
              </p>
            </div>

            <div className="flex items-center gap-3 self-start rounded-xl bg-[#fff6f9] px-4 py-3 sm:self-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ead0df] bg-white">
                <ShoppingBag
                  size={18}
                  strokeWidth={1.4}
                  className="text-[#c47ba1]"
                />
              </div>
              <div>
                <p className="font-serif text-sm text-[#80536d]">
                  Mridul Taara
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[#b18da1]">
                  Your fashion identity
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-[#f1e4eb] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-[#a18796]">
              Click any card above to change your selection.
            </p>

            <button
              type="button"
              onClick={() =>
                navigator.clipboard?.writeText(
                  `Selected Mridul Taara loader: ${loaders.find((item) => item.id === selected)?.title} (Design ${String(selected).padStart(2, "0")})`
                )
              }
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dcb8cc] px-5 py-2.5 text-xs font-medium text-[#966481] transition hover:bg-[#fbecf3]"
            >
              <Check size={14} />
              Copy selection
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-3 pt-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#e4c7d7]" />
            <Gem size={13} strokeWidth={1.4} className="text-[#c9a0b9]" />
            <span className="h-px w-6 bg-[#e4c7d7]" />
          </div>
          <p className="font-serif text-sm tracking-[0.2em] text-[#9d738a]">
            MRIDUL TAARA
          </p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#c0a2b2]">
            Thoughtfully designed · Beautifully styled
          </p>
        </footer>
      </div>
    </main>
  );
}