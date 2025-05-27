// src/components/EUSection.tsx

"use client"

import { useContact } from "./ContactContext";



export default function EUSection() {

      const { scrollToContact } = useContact();


  return (
    <section className="text-center bg-gray-200 py-20">
      <p className="text-2xl mb-4  text-zinc-900">Is your organisation EUDR ready?</p>
      <button onClick={scrollToContact} className="bg-[#0a2941] text-white px-6 py-3 rounded-full font-semibold">
        Learn More
      </button>
    </section>
  );
}
