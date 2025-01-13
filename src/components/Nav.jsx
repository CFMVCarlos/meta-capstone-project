import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export default function Nav() {
  return (
    <nav>
      <img src={Logo} alt="Little Lemon Logo" />
      <ul className="container">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/about">About</Link>
        </li>
        <li className="item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="item">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="item">
          <Link to="/order-online">Order Online</Link>
        </li>
        <li className="item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
