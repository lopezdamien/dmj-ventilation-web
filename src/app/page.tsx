"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import SIGPartnership from "@/components/SIGPartnership";
import References from "@/components/References";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Methodology />
      <SIGPartnership />
      <References />
      <Contact />
    </main>
  );
}
