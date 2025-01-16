import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon Logo" />
      <ul
        className="container menu flex-column"
        style={{ alignSelf: "center" }}
      >
        <li className="item">
          <Link to="/#">Home</Link>
        </li>
        <li className="item">
          <Link to="/#about">About</Link>
        </li>
        <li className="item">
          <Link to="/#">Menu</Link>
        </li>
        <li className="item">
          <Link to="/booking">Reservations</Link>
        </li>
        <li className="item">
          <Link to="/#">Order Online</Link>
        </li>
        <li className="item">
          <Link to="/#">Login</Link>
        </li>
      </ul>

      <section className="container contact flex-column">
        <h1>Contact</h1>
        <ul style={{ listStyleType: "none", textDecoration: "none" }}>
          <li className="item">1234 Elm Street, Springfield, IL 62704, USA</li>
          <li className="item">+1 (234) 567-890</li>
          <li className="item">example@example.com</li>
        </ul>
      </section>

      <section className="container socialmedia flex-column">
        <h1>Social Media</h1>
        <ul style={{ listStyleType: "none", textDecoration: "none" }}>
          <li className="item">
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li className="item">
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li className="item">
            <a href="https://x.com/">X</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
