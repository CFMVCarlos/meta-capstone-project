/* global fetchAPI */
// Indicating that fetchAPI is a global function, possibly imported or defined elsewhere

import React, { useReducer } from "react"; // Importing React and useReducer hook for state management
import BookingForm from "./BookingForm"; // Importing BookingForm component
import Footer from "./Footer"; // Importing Footer component
import Nav from "./Nav"; // Importing Nav component

// Reducer function that updates the available times based on the action type
function updateTimes(state, action) {
  switch (action.type) {
    case "update":
      // Calling fetchAPI with the new date and updating available times
      const updatedTimes = fetchAPI(new Date(action.date));
      console.log("Updated times:", updatedTimes); // Optional for debugging purposes
      return updatedTimes; // Return the updated list of available times
    default:
      // In case of an invalid action type, an error is thrown
      throw new Error("Invalid action type");
  }
}

// Function to initialize the available times when the component loads
function initializeTimes() {
  // Fetch the initial available times using the current date
  return fetchAPI(new Date());
}

// Main component for the booking page
export default function BookingPage() {
  // Using the useReducer hook to manage state for available times
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes, // The reducer function that handles the state updates
    [], // Initial state (empty array for available times)
    initializeTimes // Function to initialize the state (fetch initial times)
  );

  return (
    <>
      <Nav></Nav> {/* Render the navigation component */}
      <BookingForm
        availableTimes={availableTimes} // Pass the available times as props
        dispatchAvailableTimes={dispatchAvailableTimes} // Pass the dispatch function to update times
      ></BookingForm>
      <Footer style={{ position: "absolute", bottom: 0 }}></Footer>
      {/* Render the footer with absolute positioning */}
    </>
  );
}
