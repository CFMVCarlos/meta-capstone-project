import React from "react";
import Logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon Logo" />
      <div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>Contact</h1>
        <p>Address</p>
        <p>Phone Number</p>
        <p>Email</p>
      </div>
      <div>
        <h1>Social Media</h1>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">X</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
