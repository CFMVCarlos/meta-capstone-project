import React from "react"; // Importing React to use JSX syntax
import About from "./About"; // Importing the About component for the about us section
import HeroSection from "./HeroSection"; // Importing the HeroSection component for the introductory section
import Highlights from "./Highlights"; // Importing the Highlights component for showcasing weekly specials
import Testimonials from "./Testimonials"; // Importing the Testimonials component to display customer reviews

// Main component that aggregates different sections of the page
export default function Main() {
  return (
    <main>
      {/* The main content of the page */}
      <HeroSection />
      {/* Render the HeroSection component (introductory section) */}
      <Highlights /> {/* Render the Highlights component (weekly specials) */}
      <Testimonials />
      {/* Render the Testimonials component (customer reviews) */}
      <About /> {/* Render the About component (about us section) */}
    </main>
  );
}
