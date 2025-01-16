import React, { useCallback, useEffect, useState } from "react"; // Importing necessary hooks from React
import { Link } from "react-router-dom"; // Importing Link to navigate between routes
import Logo from "../assets/Logo.svg"; // Importing the logo image

export default function Nav() {
  // State to control the visibility of the navigation bar
  const [showNav, setShowNav] = useState(true);
  // State to track the last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);

  // Memoized handleScroll function to optimize performance
  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // If the user is scrolling down, hide the navigation
      setShowNav(false);
    } else {
      // If the user is scrolling up, show the navigation
      setShowNav(true);
    }
    // Update the last scroll position after each scroll event
    setLastScrollY(window.scrollY);
  }, [lastScrollY]); // Dependency array ensures handleScroll is recalculated when lastScrollY changes

  useEffect(() => {
    // Add a scroll event listener when the component is mounted
    window.addEventListener("scroll", handleScroll);
    // Cleanup the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Ensures the effect re-runs when handleScroll changes

  return (
    <nav className={showNav ? "" : "hidden"}>
      {/* Conditionally apply the "hidden" class when showNav is false */}
      <img src={Logo} alt="Little Lemon Logo" /> {/* Display the logo */}
      <ul className="container">
        {/* Unordered list to hold navigation items */}
        <li className="item">
          <Link to="/#">Home</Link> {/* Link to Home section */}
        </li>
        <li className="item">
          <Link to="/#about">About</Link> {/* Link to About section */}
        </li>
        <li className="item">
          <Link to="/#">Menu</Link> {/* Link to Menu section */}
        </li>
        <li className="item">
          <Link to="/booking">Reservations</Link>
          {/* Link to Reservations page */}
        </li>
        <li className="item">
          <Link to="/#">Order Online</Link> {/* Link to Order Online page */}
        </li>
        <li className="item">
          <Link to="/#">Login</Link> {/* Link to Login page */}
        </li>
      </ul>
    </nav>
  );
}
