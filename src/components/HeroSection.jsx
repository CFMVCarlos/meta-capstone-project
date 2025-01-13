import React from "react";
import Food from "../assets/restauranfood.jpg";

export default function HeroSection() {
  return (
    <section className="hero">
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </section>
      <section
        className="food"
        style={{ backgroundImage: `url(${Food})` }}
      ></section>
    </section>
  );
}
