import React from "react"; // Importing React
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom for navigation
import Food from "../assets/restauranfood.jpg"; // Importing the image for the food section

// HeroSection component representing the hero section at the top of the homepage
export default function HeroSection() {
  return (
    <section className="hero">
      {/* First section contains text content */}
      <section>
        <h1>Little Lemon</h1> {/* Restaurant name */}
        <h2>Chicago</h2> {/* Location of the restaurant */}
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        {/* Restaurant description with a brief introduction */}
        {/* Link to the booking page with a button to reserve a table */}
        <Link to="/booking">
          <button>Reserve a Table</button>
        </Link>
      </section>

      {/* Second section displays the food image as a background */}
      <section
        className="food"
        style={{ backgroundImage: `url(${Food})` }} // Setting the background image to the imported food image
      ></section>
    </section>
  );
}
