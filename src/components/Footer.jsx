import React from "react"; // Importing React
import Logo from "../assets/Logo.svg"; // Importing the logo image
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom to navigate between pages

// Footer component to display website's footer content
export default function Footer() {
  return (
    <footer>
      {/* Displaying the logo with an alt description for accessibility */}
      <img src={Logo} alt="Little Lemon Logo" />

      {/* Navigation menu for the footer, styled as a column */}
      <ul
        className="container menu flex-column"
        style={{ alignSelf: "center" }} // Centering the list within its container
      >
        <li className="item">
          <Link to="/#">Home</Link> {/* Link to the Home section */}
        </li>
        <li className="item">
          <Link to="/#about">About</Link> {/* Link to the About section */}
        </li>
        <li className="item">
          <Link to="/#">Menu</Link> {/* Link to the Menu section */}
        </li>
        <li className="item">
          <Link to="/booking">Reservations</Link>
          {/* Link to the Reservations page */}
        </li>
        <li className="item">
          <Link to="/#">Order Online</Link>
          {/* Link to the Order Online section */}
        </li>
        <li className="item">
          <Link to="/#">Login</Link> {/* Link to the Login section */}
        </li>
      </ul>

      {/* Contact information section */}
      <section className="container contact flex-column">
        <h1>Contact</h1> {/* Contact heading */}
        <ul style={{ listStyleType: "none", textDecoration: "none" }}>
          <li className="item">1234 Elm Street, Springfield, IL 62704, USA</li>
          {/* Address */}
          <li className="item">+1 (234) 567-890</li> {/* Phone number */}
          <li className="item">example@example.com</li> {/* Email address */}
        </ul>
      </section>

      {/* Social media links section */}
      <section className="container socialmedia flex-column">
        <h1>Social Media</h1> {/* Social Media heading */}
        <ul style={{ listStyleType: "none", textDecoration: "none" }}>
          <li className="item">
            <a href="https://www.facebook.com/">Facebook</a>
            {/* Facebook link */}
          </li>
          <li className="item">
            <a href="https://www.instagram.com/">Instagram</a>
            {/* Instagram link */}
          </li>
          <li className="item">
            <a href="https://x.com/">X</a> {/* X (formerly Twitter) link */}
          </li>
        </ul>
      </section>
    </footer>
  );
}
