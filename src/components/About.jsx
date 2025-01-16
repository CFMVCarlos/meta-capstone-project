import React from "react";
// Importing images for the about section
import MarioAdrianA from "../assets/Mario and Adrian A.jpg";
import MarioAdrianB from "../assets/Mario and Adrian b.jpg";

export default function About() {
  return (
    // Main section for the About page, with an ID for navigation
    <section className="about" id="about">
      {/* Section for the text content about the restaurant */}
      <section className="about-text">
        <h1>Little Lemon</h1> {/* Restaurant name */}
        <h2>Chicago</h2> {/* Location of the restaurant */}
        <ul>
          {/* List of key information about the restaurant */}
          <li>
            Welcome to Little Lemon, a family-owned Mediterranean restaurant
            located in the heart of Chicago.
          </li>
          <li>
            With eight years of dedication to culinary excellence, we take pride
            in serving traditional Mediterranean recipes with a modern twist.
          </li>
          <li>
            At Little Lemon, we believe in crafting dishes that bring together
            fresh, carefully sourced ingredients with innovative flavors. From
            our famous Greek Salad to our delectable Lemon Dessert, every bite
            is a celebration of authenticity and creativity.
          </li>
          <li>
            Whether you're dining in, ordering delivery, or reserving a table
            for a special occasion, we’re here to make your experience
            memorable.
          </li>
        </ul>
      </section>
      {/* Section for the images showcasing the restaurant */}
      <section className="about-images">
        {/* Image A showcasing the restaurant's atmosphere */}
        <img
          className="A"
          src={MarioAdrianA}
          width="100%"
          alt="Mario and Adrian A" // Alt text for accessibility
        />
        {/* Image B showcasing another view or aspect of the restaurant */}
        <img
          className="B"
          src={MarioAdrianB}
          width="100%"
          alt="Mario and Adrian B" // Alt text for accessibility
        />
      </section>
    </section>
  );
}
