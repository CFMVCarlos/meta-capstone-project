import React from "react";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

export default function Main() {
  return <main>
    <HeroSection></HeroSection>
    <Highlights></Highlights>
    <Testimonials></Testimonials>
    <About></About>
  </main>;
}
