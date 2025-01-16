import React from "react";
import Food from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

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

        <Link to="/booking">
          <button>Reserve a Table</button>
        </Link>
      </section>
      <section
        className="food"
        style={{ backgroundImage: `url(${Food})` }}
      ></section>
    </section>
  );
}
