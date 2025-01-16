import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export default function Nav() {
  const [showNav, setShowNav] = useState(true); // State to control nav visibility
  const [lastScrollY, setLastScrollY] = useState(0); // To track the last scroll position
  // Use useCallback to memoize the handleScroll function
  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNav(false);
    } else {
      // Scrolling up
      setShowNav(true);
    }
    // Update the last scroll position
    setLastScrollY(window.scrollY);
  }, [lastScrollY]); // Dependency on lastScrollY
  useEffect(() => {
    // Add the scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Add handleScroll to the dependency array

  return (
    <nav className={showNav ? "" : "hidden"}>
      <img src={Logo} alt="Little Lemon Logo" />
      <ul className="container">
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
    </nav>
  );
}
