import React from "react";
import Logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon Logo" />
      <ul className="container menu flex-column" style={{ alignSelf: "center" }}>
        <li className="item">
          <a href="#">Home</a>
        </li>
        <li className="item">
          <a href="#">About</a>
        </li>
        <li className="item">
          <a href="#">Menu</a>
        </li>
        <li className="item">
          <a href="#">Reservations</a>
        </li>
        <li className="item">
          <a href="#">Order Online</a>
        </li>
        <li className="item">
          <a href="#">Login</a>
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
            <a href="#">Facebook</a>
          </li>
          <li className="item">
            <a href="#">Instagram</a>
          </li>
          <li className="item">
            <a href="#">X</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
