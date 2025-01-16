import React from "react"; // Importing React
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Importing necessary components for routing
import BookingPage from "./components/BookingPage"; // Importing BookingPage component
import ConfirmedBooking from "./components/ConfirmedBooking"; // Importing ConfirmedBooking component
import HomePage from "./components/HomePage"; // Importing HomePage component

// Main App component that sets up routing for the website
function App() {
  return (
    <Router>
      {/* Wrapping the application in Router to enable routing */}
      <Routes>
        {/* Define the different routes in the application */}
        {/* Route for the homepage */}
        <Route path="/" element={<HomePage />}></Route>
        {/* Route for the booking page */}
        <Route path="/booking" element={<BookingPage />}></Route>
        {/* Route for the confirmed booking page */}
        <Route path="/booking/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </Router>
  );
}

export default App; // Exporting the App component as default
