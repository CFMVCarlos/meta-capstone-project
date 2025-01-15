import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import React from "react";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/booking/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
