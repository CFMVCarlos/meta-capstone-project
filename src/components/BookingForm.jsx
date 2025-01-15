/* global submitAPI */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm({
  availableTimes,
  dispatchAvailableTimes,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservationDetails = { date, time, guests, occasion };
    console.log("Reservation details:", reservationDetails);
    let response = await submitAPI(reservationDetails);
    if (response) {
      navigate("/booking/confirmed");
    } else {
      alert("Failed to submit the reservation. Please try again.");
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatchAvailableTimes({ type: "update", date: selectedDate });
  };

  return (
    <section className="booking-form">
      <form
        style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
        onSubmit={handleSubmit}
        aria-labelledby="reservation-form-title"
      >
        <h2 id="reservation-form-title">Reservation Form</h2>

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          aria-label="Choose a reservation date"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          aria-label="Choose a reservation time"
        >
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          aria-label="Enter the number of guests"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Select the occasion for the reservation"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button
          type="submit"
          style={{ justifySelf: "center" }}
          aria-label="Submit the reservation"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
