/* global submitAPI */
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm({
  availableTimes,
  dispatchAvailableTimes,
}) {
  // State variables to manage form data
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Initialize date to today's date (format: YYYY-MM-DD)
  });
  const [time, setTime] = useState(availableTimes[0]); // Set default time to first available time
  const [guests, setGuests] = useState(1); // Default guests to 1
  const [occasion, setOccasion] = useState(""); // Empty occasion initially
  const [formValid, setFormValid] = useState(false); // Track form validity
  const [dateError, setDateError] = useState(""); // Error message for date
  const [guestsError, setGuestsError] = useState(""); // Error message for guests

  const navigate = useNavigate(); // Hook to navigate to another page after submission

  // Handler for date change
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    console.log(selectedDate); // Log the selected date
    setDate(selectedDate); // Update date in state
    dispatchAvailableTimes({ type: "update", date: selectedDate }); // Dispatch updated date to parent component
  };

  // Memoized function to validate form fields
  const validateFields = useCallback(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to start of the day for comparison
    const selectedDate = new Date(date);
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(today.getFullYear() + 1); // Set to one year from today

    console.log(today, selectedDate, oneYearFromNow); // Log date comparison

    let isValid = true;

    // Validate date: must be today or a future date within one year
    if (!date || selectedDate < today || selectedDate > oneYearFromNow) {
      console.log(selectedDate); // Log invalid date
      setDateError(
        "Date must be today or a future date within one year from now."
      );
      isValid = false;
    } else {
      setDateError(""); // Clear error if valid
    }

    // Validate guests: must be between 1 and 10
    if (guests < 1 || guests > 10) {
      setGuestsError("Number of guests must be between 1 and 10.");
      isValid = false;
    } else {
      setGuestsError(""); // Clear error if valid
    }

    return isValid; // Return final validation result
  }, [date, guests]); // Memoized to change only when `date` or `guests` change

  // Check form validity on changes to form fields
  useEffect(() => {
    const isValid = validateFields() && time && occasion !== "";
    setFormValid(isValid); // Set form validity based on field validations
  }, [date, time, guests, occasion, validateFields]); // Include validateFields as a dependency

  // Generic input change handler
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value); // Update state with new input value
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!validateFields()) return; // Validate fields before proceeding

    const reservationDetails = { date, time, guests, occasion }; // Prepare reservation data
    let response = await submitAPI(reservationDetails); // Submit reservation to API
    if (response) {
      navigate("/booking/confirmed"); // Redirect to confirmation page on success
    } else {
      alert("Failed to submit the reservation. Please try again."); // Show error alert on failure
    }
  };

  return (
    <section className="booking-form">
      <form
        style={{ display: "grid", width: "200px", gap: "20px" }}
        onSubmit={handleSubmit} // Attach form submit handler
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
            {dateError} {/* Display date error message */}
          </span>
        )}
        <input
          type="date"
          id="res-date"
          value={date} // Bind date value
          onChange={handleDateChange} // Handle date change
          required
          aria-label="Choose a reservation date"
        />

        {/* Time Field */}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time} // Bind selected time
          onChange={handleInputChange(setTime)} // Handle time change
          required
          aria-label="Choose a reservation time"
        >
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption} {/* List available times as options */}
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
            {guestsError} {/* Display guests error message */}
          </span>
        )}
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests} // Bind guests value
          onChange={handleInputChange(setGuests)} // Handle guest number change
          required
          aria-label="Enter the number of guests"
        />

        {/* Occasion Field */}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion} // Bind selected occasion
          onChange={handleInputChange(setOccasion)} // Handle occasion change
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
          disabled={!formValid} // Disable submit button if form is invalid
          aria-label="Submit the reservation"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
