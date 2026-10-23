
import { useEffect } from "react";
import fashionLoaderImage from "../assets/fashion-loader-reference.png";

export default function FashionLoading() {
  useEffect(() => {
    const styleId = "fashion-loading-animations";

    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;

    style.textContent = `
      @keyframes luxurySpin {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes luxuryPulse {
        0%, 100% {
          transform: scale(0.9);
          opacity: 0.65;
        }
        50% {
          transform: scale(1.12);
          opacity: 1;
        }
      }

      @keyframes luxuryProgress {
        0% {
          transform: translateX(-140%);
        }
        100% {
          transform: translateX(400%);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .fashion-animated {
          animation: none !important;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <main className="relative flex min-h-[100svh] w-full flex-col items-center overflow-hidden bg-[#fff8f5] px-3 sm:px-6 lg:px-8">

      {/* Soft pastel background */}
      <div className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-[#f8dce7]/50 blur-[85px] sm:h-72 sm:w-72" />

      <div className="pointer-events-none absolute -right-24 top-[30%] h-60 w-60 rounded-full bg-[#e7dcfa]/50 blur-[90px] sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#ffe4d8]/40 blur-[85px]" />

      {/* Responsive fashion artwork */}
      <section
        className="
          relative z-10 flex w-full max-w-5xl shrink-0
          items-end justify-center
          h-[38svh] min-h-[210px] max-h-[340px]
          sm:h-[48svh] sm:min-h-[300px] sm:max-h-[480px]
          lg:h-[54svh] lg:max-h-[560px]
        "
        aria-hidden="true"
      >
        <img
          src={fashionLoaderImage}
          alt=""
          draggable="false"
          className="
            pointer-events-none
            h-full w-full select-none
            object-contain object-bottom
            opacity-80
            [mask-image:radial-gradient(ellipse_76%_78%_at_50%_48%,black_48%,transparent_100%)]
            [-webkit-mask-image:radial-gradient(ellipse_76%_78%_at_50%_48%,black_48%,transparent_100%)]
            sm:opacity-85
          "
          style={{
            filter:
              "drop-shadow(0 10px 24px rgba(190,132,155,0.07))",
          }}
        />
      </section>

      {/* Loader: only 3px gap after the artwork section */}
      <section
        className="
          relative z-10 -mt-[3px]
          flex w-full shrink-0 flex-col
          items-center justify-start
          pt-0 pb-5
          sm:pb-7
        "
        role="status"
        aria-label="Loading your fashion experience"
      >
        {/* Subtle ambient glow */}
        <div
          className="
            pointer-events-none absolute left-1/2 top-8
            h-24 w-48 -translate-x-1/2
            rounded-full bg-[#f3a9cc]/15 blur-3xl
          "
        />

        {/* Elegant rotating ring */}
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center sm:h-[66px] sm:w-[66px]">

          <div className="absolute inset-0 rounded-full border border-[#edcddd]/80 shadow-[0_0_24px_rgba(232,133,178,0.08)]" />

          <div
            className="
              fashion-animated absolute inset-[5px]
              rounded-full border-2 border-transparent
              border-t-[#d7b9ed] border-r-[#d7b9ed]
            "
            style={{
              animation: "luxurySpin 1.5s linear infinite",
            }}
          />

          {/* Center sparkle */}
          <span
            className="fashion-animated relative text-xl font-light text-[#ce78a0] sm:text-2xl"
            style={{
              animation: "luxuryPulse 2s ease-in-out infinite",
            }}
            aria-hidden="true"
          >
            ✦
          </span>
        </div>

        {/* Loading text */}
        <p className="relative mt-3 text-center text-[9px] font-medium uppercase tracking-[0.22em] text-[#a77b91] sm:text-[10px] sm:tracking-[0.28em]">
          Curating your style
        </p>

        {/* Animated progress line */}
        <div className="relative mt-3 h-[2px] w-20 overflow-hidden rounded-full bg-[#f1e0e8] sm:w-24">
          <div
            className="
              fashion-animated absolute inset-y-0 left-0
              w-1/3 rounded-full
              bg-gradient-to-r from-[#e8b6d0] to-[#c7a2e9]
            "
            style={{
              animation: "luxuryProgress 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* Flexible remaining space */}
      <div className="min-h-3 flex-1 sm:min-h-6" />

    </main>
  );
}