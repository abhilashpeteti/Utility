
import { useEffect, useState } from "react";
import {
  ShoppingBag,
  Shirt,
  Heart,
  Gem,
  ShoppingBasket,
} from "lucide-react";

const fashionIcons = [
  ShoppingBag,
  Shirt,
  Heart,
  Gem,
  ShoppingBasket,
];

const editorialBarHeights = [9, 16, 25, 34, 25, 16, 9];

export default function FashionLoading() {
  const [activeIcon, setActiveIcon] = useState(0);

  useEffect(() => {
    const styleId = "fashion-loading-animations";

    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;

      style.textContent = `
        @keyframes iconAppear {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes editorialBar {
          0%, 100% {
            transform: scaleY(.55);
            opacity: .55;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        .fashion-editorial-bar {
          background: #c78eae;
          transform-origin: center;
          animation: editorialBar 1s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .fashion-animated,
          .fashion-editorial-bar {
            animation: none !important;
          }
        }
      `;

      document.head.appendChild(style);
    }

    const timer = setInterval(() => {
      setActiveIcon((current) => (current + 1) % fashionIcons.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const ActiveIcon = fashionIcons[activeIcon];

  return (
    <main className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#fff8f5] px-4">

      {/* Pastel ambient background */}
      <div className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-[#f8dce7]/50 blur-[85px] sm:h-72 sm:w-72" />

      <div className="pointer-events-none absolute -right-24 top-[30%] h-60 w-60 rounded-full bg-[#e7dcfa]/50 blur-[90px] sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#ffe4d8]/40 blur-[85px]" />

      {/* Centered fashion loader */}
      <section
        className="relative z-10 flex w-full flex-col items-center justify-center"
        role="status"
        aria-label="Loading your fashion experience"
      >
        {/* Fashion icon circle */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full drop-shadow-[0_6px_18px_rgba(206,120,160,0.20)] sm:h-32 sm:w-32">

          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[#f3a9cc]/20 blur-xl" />

          {/* Outer circle */}
          <div
            className="
              absolute inset-0 rounded-full
              border border-[#e8bfd3]
              bg-white/60
              shadow-[0_0_0_4px_rgba(232,191,211,0.12),0_8px_28px_rgba(190,132,155,0.28),inset_0_0_12px_rgba(232,191,211,0.12)]
            "
          />

          {/* Changing fashion icons */}
          <ActiveIcon
            key={activeIcon}
            className="relative z-10 h-10 w-10 text-[#ce78a0] sm:h-12 sm:w-12"
            strokeWidth={1.5}
            style={{
              animation: "iconAppear 0.5s ease-out",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Loading message */}
        <p className="mt-6 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-[#a77b91] sm:text-xs">
          Curating your style
        </p>

        {/* Editorial-inspired vertical bars */}
        <div
          className="mt-6 flex h-9 items-center justify-center gap-1.5"
          aria-hidden="true"
        >
          {editorialBarHeights.map((height, index) => (
            <span
              key={index}
              className="fashion-editorial-bar w-1 rounded-full"
              style={{
                height: `${height}px`,
                animationDelay: `${index * 0.12}s`,
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}