// import React from "react";
// import heroBanner from "../assets/hero-section.png";

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative w-full overflow-hidden bg-[#fff9f6]"
//       aria-label="Mridul Taara fashion collection"
//     >
//       <div className="mx-auto w-full max-w-[1920px]">
//         <img
//           src={heroBanner}
//           alt="Mridul Taara fashion collection"
//           className="
//             block
//             h-auto
//             w-full
//             object-contain
//           "
//           fetchPriority="high"
//         />
//       </div>
//     </section>
//   );
// }


import heroBanner from "../assets/hero-section.png";

export default function HeroSection() {
  return (
    <section id="home" aria-label="Mridul Taara fashion collection" className="relative w-full overflow-hidden bg-[#fff9f6]">
      <div className="relative mx-auto w-full max-w-[1920px]">
        <img src={heroBanner} alt="Mridul Taara fashion collection" fetchPriority="high" className="block h-auto w-full object-contain" />

        <a href="/shop" aria-label="Shop the Mridul Taara collection" className="group absolute left-[71.5%] top-[75%] md:top-[65%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-[#dba2ad]/70 bg-white/40 px-2.5 py-1.5 text-[7px] font-medium uppercase tracking-[0.08em] text-[#38251f] shadow-sm backdrop-blur-md transition-colors duration-300 hover:bg-white/60 min-[380px]:px-3 min-[380px]:py-1.5 min-[380px]:text-[8px] min-[480px]:px-4 min-[480px]:py-2 min-[480px]:text-[9px] sm:px-5 sm:py-2 sm:text-[10px] sm:tracking-[0.12em] md:px-6 md:py-2.5 md:text-xs lg:px-7 lg:py-3 lg:text-sm lg:tracking-[0.16em]">
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-[180%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[mridulShine_2.8s_ease-in-out_infinite]" />
          <span className="relative z-10 whitespace-nowrap">Shop with us</span>
        </a>
      </div>

      <style>{`
        @keyframes mridulShine {
          0% { transform: translateX(-180%) skewX(-20deg); }
          55%, 100% { transform: translateX(380%) skewX(-20deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mridul-shine { animation: none; }
        }
      `}</style>
    </section>
  );
}
