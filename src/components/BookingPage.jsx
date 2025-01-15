/* global fetchAPI */
import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import Nav from "./Nav";
import Footer from "./Footer";

function updateTimes(state, action) {
  switch (action.type) {
    case "update":
      const updatedTimes = fetchAPI(new Date(action.date));
      console.log("Updated times:", updatedTimes); // Optional for debugging
      return updatedTimes; // Return the updated list of available times
    default:
      throw new Error("Invalid action type");
  }
}

function initializeTimes() {
  return fetchAPI(new Date());
}

export default function BookingPage() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <Nav></Nav>
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
      ></BookingForm>
      <Footer style={{ position: "absolute", bottom: 0 }}></Footer>
    </>
  );
}
