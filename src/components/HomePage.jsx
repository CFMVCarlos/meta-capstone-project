import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      // Check if the URL has a hash
      const elementId = location.hash.substring(1); // Remove '#' from the hash
      const element = document.getElementById(elementId); // Get the element by id
      if (element) {
        // Check if the element exists
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  return (
    <>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
