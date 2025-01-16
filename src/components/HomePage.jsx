import React, { useEffect } from "react"; // Importing React to use JSX syntax
import { useLocation } from "react-router-dom"; // Importing useLocation hook to get the current URL location
import Footer from "./Footer"; // Importing the Footer component for the footer section
import Main from "./Main"; // Importing the Main component for the main content
import Nav from "./Nav"; // Importing the Nav component for the navigation bar

// HomePage component, which contains the main structure of the home page
function HomePage() {
  const location = useLocation(); // Getting the current location object (URL)

  useEffect(() => {
    if (location.hash) {
      // Check if the URL contains a hash (e.g. #about)
      const elementId = location.hash.substring(1); // Remove the '#' symbol from the hash
      const element = document.getElementById(elementId); // Get the element with the corresponding id
      if (element) {
        // If the element exists, scroll it into view with a smooth animation
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      // If there's no hash in the URL, scroll to the top of the page smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); // The effect runs whenever the location (URL) changes

  return (
    <>
      {/* Main structure of the homepage */}
      <Nav /> {/* Navigation bar */}
      <Main /> {/* Main content */}
      <Footer /> {/* Footer section */}
    </>
  );
}

export default HomePage; // Exporting the HomePage component to be used in other parts of the app
