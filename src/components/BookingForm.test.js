import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  // Mock function to simulate dispatch actions in tests
  const mockDispatch = jest.fn();
  // Available times for the booking form
  const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];

  // Before all tests, mock global alert function
  beforeAll(() => {
    global.alert = jest.fn(); // Mock the alert function
  });

  // After all tests, restore the global alert to its original state
  afterAll(() => {
    jest.restoreAllMocks(); // Restore the original alert after tests
  });

  // Before each test, clear previous mock calls and mock submitAPI function
  beforeEach(() => {
    mockDispatch.mockClear();
    global.submitAPI = jest.fn();
  });

  // After each test, clear mocks to ensure clean slate for each test
  afterEach(() => {
    // Reset the mock after each test
    jest.clearAllMocks();
  });

  test("renders the form correctly", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={mockDispatch}
      />
    );

    // Check that all form elements are rendered properly
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { value: /Make Your Reservation/i })
    ).toBeInTheDocument();
  });

  test("allows users to fill the form and submit", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={mockDispatch}
      />
    );

    // Simulate user filling in the form fields
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2025-01-15" },
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "12:00 PM" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: 5 },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Birthday" },
    });

    // Simulate form submission
    fireEvent.click(
      screen.getByRole("button", { value: /Make Your Reservation/i })
    );

    // Verify if dispatch function was called with the correct argument
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update",
      date: "2025-01-15",
    });

    // Check if the form values are updated correctly
    expect(screen.getByLabelText(/Choose date/i)).toHaveValue("2025-01-15");
    expect(screen.getByLabelText(/Choose time/i)).toHaveValue("12:00 PM");
    expect(screen.getByLabelText(/Number of guests/i)).toHaveValue(5);
    expect(screen.getByLabelText(/Occasion/i)).toHaveValue("Birthday");
  });

  test("dispatches date updates on change", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={mockDispatch}
      />
    );

    // Simulate date change in the form
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2025-01-15" },
    });

    // Ensure dispatch is called with the correct date update
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update",
      date: "2025-01-15",
    });
    expect(mockDispatch).toHaveBeenCalledTimes(1); // Ensure it was called once
  });
});

// Test the form's HTML5 validation attributes
test("BookingForm renders with correct HTML5 validation attributes", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatchAvailableTimes={jest.fn()}
    />
  );

  // Check the date input validation
  const dateInput = screen.getByLabelText(/choose a reservation date/i);
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toBeRequired(); // Check if it is required

  // Check the time select validation
  const timeSelect = screen.getByLabelText(/choose a reservation time/i);
  expect(timeSelect).toHaveAttribute("required");

  // Check the guests input validation
  const guestsInput = screen.getByLabelText(/enter the number of guests/i);
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toBeRequired();

  // Check the occasion select validation
  const occasionSelect = screen.getByLabelText(
    /select the occasion for the reservation/i
  );
  expect(occasionSelect).toBeRequired();
});

// Test if the submit button is enabled when inputs are valid
test("BookingForm enables submit button for valid inputs", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatchAvailableTimes={jest.fn()}
    />
  );

  const submitButton = screen.getByRole("button", {
    name: /submit the reservation/i,
  });
  const dateInput = screen.getByLabelText(/choose a reservation date/i);
  const timeSelect = screen.getByLabelText(/choose a reservation time/i);
  const guestsInput = screen.getByLabelText(/enter the number of guests/i);
  const occasionSelect = screen.getByLabelText(
    /select the occasion for the reservation/i
  );

  // Submit button is initially disabled
  expect(submitButton).toBeDisabled();

  // Simulate user filling in valid values
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // Increment by 1 day
  const formattedDate = tomorrow.toISOString().split("T")[0]; // Format to YYYY-MM-DD
  fireEvent.change(dateInput, { target: { value: formattedDate } });
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  // Check if the submit button is enabled now
  expect(submitButton).toBeEnabled();
});

// Test if the submit button remains disabled for invalid inputs
test("BookingForm keeps submit button disabled for invalid inputs", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatchAvailableTimes={jest.fn()}
    />
  );

  const submitButton = screen.getByRole("button", {
    name: /submit the reservation/i,
  });
  const guestsInput = screen.getByLabelText(/enter the number of guests/i);

  // Simulate user entering an invalid number of guests
  fireEvent.change(guestsInput, { target: { value: "0" } });

  // Ensure the submit button remains disabled
  expect(submitButton).toBeDisabled();
});
