/* global submitAPI */
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm({
  availableTimes,
  dispatchAvailableTimes,
}) {
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  });
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [dateError, setDateError] = useState(""); // Error message for date
  const [guestsError, setGuestsError] = useState(""); // Error message for guests

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    console.log(selectedDate);
    setDate(selectedDate);
    dispatchAvailableTimes({ type: "update", date: selectedDate });
  };

  // Memoize the validateFields function to avoid recreating it on each render
  const validateFields = useCallback(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to start of the day
    const selectedDate = new Date(date);
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(today.getFullYear() + 1);

    console.log(today, selectedDate, oneYearFromNow);

    let isValid = true;

    // Validate date
    if (!date || selectedDate < today || selectedDate > oneYearFromNow) {
      console.log(selectedDate);
      setDateError(
        "Date must be today or a future date within one year from now."
      );
      isValid = false;
    } else {
      setDateError("");
    }

    // Validate guests
    if (guests < 1 || guests > 10) {
      setGuestsError("Number of guests must be between 1 and 10.");
      isValid = false;
    } else {
      setGuestsError("");
    }

    return isValid;
  }, [date, guests]); // Memoized to only change when `date` or `guests` change

  useEffect(() => {
    const isValid = validateFields() && time && occasion !== "";
    setFormValid(isValid);
  }, [date, time, guests, occasion, validateFields]); // Include validateFields as a dependency

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const reservationDetails = { date, time, guests, occasion };
    let response = await submitAPI(reservationDetails);
    if (response) {
      navigate("/booking/confirmed");
    } else {
      alert("Failed to submit the reservation. Please try again.");
    }
  };

  return (
    <section className="booking-form">
      <form
        style={{ display: "grid", width: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
        aria-labelledby="reservation-form-title"
      >
        <h2 id="reservation-form-title">Reservation Form</h2>

        {/* Date Field */}
        <label htmlFor="res-date">Choose date</label>
        {dateError && (
          <span
            style={{
              color: "red",
              fontSize: "0.9rem",
            }}
            aria-live="polite"
          >
            {dateError}
          </span>
        )}
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          aria-label="Choose a reservation date"
        />

        {/* Time Field */}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={handleInputChange(setTime)}
          required
          aria-label="Choose a reservation time"
        >
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        {/* Guests Field */}

        <label htmlFor="guests">Number of guests</label>
        {guestsError && (
          <span
            style={{
              color: "red",
              fontSize: "0.9rem",
            }}
            aria-live="polite"
          >
            {guestsError}
          </span>
        )}
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleInputChange(setGuests)}
          required
          aria-label="Enter the number of guests"
        />

        {/* Occasion Field */}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={handleInputChange(setOccasion)}
          required
          aria-label="Select the occasion for the reservation"
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ justifySelf: "center" }}
          disabled={!formValid}
          aria-label="Submit the reservation"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
