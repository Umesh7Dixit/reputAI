// // src/components/HeroSection.tsx
// export default function HeroSection() {
//   return (
//     <section className="relative text-white text-center py-32 bg-cover bg-center" style={{ backgroundImage: "url('/carousalImage2.jpg')" }}>
//       <p className="text-xl">Strengthening Every Link for a Better Tomorrow</p>
//       <h1 className="text-5xl font-bold mt-2">
//         Pioneering the Future of Transparent, Sustainable and Circular Supply Chain Solutions
//       </h1>
//       <button className="mt-8 bg-white text-[#0a2941] px-6 py-3 rounded-full font-semibold">
//         Book a call now
//       </button>
//     </section>
//   );
// }

"use client"


import { useContact } from "./ContactContext";


// src/components/HeroSection.tsx
export default function HeroSection() {

    const { scrollToContact } = useContact();


  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
      style={{ backgroundImage: "url('/carousalImage2.jpg')" }}
    >
      <p className="text-xl md:text-2xl">Strengthening Every Link for a Better Tomorrow</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 max-w-6xl leading-tight">
        Pioneering the Future of Transparent, Sustainable and Circular Supply Chain Solutions
      </h1>
      <button onClick={scrollToContact} className="mt-8 bg-white text-[#0a2941] px-6 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition">
        Book a call now
      </button>
    </section>
  );
}
