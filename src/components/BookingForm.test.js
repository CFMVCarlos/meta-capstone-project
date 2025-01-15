import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  const mockDispatch = jest.fn();
  const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];

  beforeAll(() => {
    global.alert = jest.fn(); // Mock the alert function
  });

  afterAll(() => {
    jest.restoreAllMocks(); // Restore the original alert after tests
  });

  beforeEach(() => {
    mockDispatch.mockClear();
    global.submitAPI = jest.fn();
  });

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

    // Check that all form elements are rendered
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

    // Simulate user input
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

    // Submit the form
    fireEvent.click(
      screen.getByRole("button", { value: /Make Your Reservation/i })
    );

    // Validate form submission
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update",
      date: "2025-01-15",
    });
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

    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2025-01-15" },
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "update",
      date: "2025-01-15",
    });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});

test("BookingForm renders with correct HTML5 validation attributes", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatchAvailableTimes={jest.fn()}
    />
  );

  // Check the date input
  const dateInput = screen.getByLabelText(/choose a reservation date/i);
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toBeRequired();

  // Check the time select
  const timeSelect = screen.getByLabelText(/choose a reservation time/i);
  expect(timeSelect).toHaveAttribute("required");

  // Check the guests input
  const guestsInput = screen.getByLabelText(/enter the number of guests/i);
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toBeRequired();

  // Check the occasion select
  const occasionSelect = screen.getByLabelText(
    /select the occasion for the reservation/i
  );
  expect(occasionSelect).toBeRequired();
});

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

  // Fill valid values
  fireEvent.change(dateInput, { target: { value: "2024-12-25" } });
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  // Submit button should now be enabled
  expect(submitButton).toBeEnabled();
});

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

  // Fill invalid number of guests
  fireEvent.change(guestsInput, { target: { value: "0" } });

  // Submit button should remain disabled
  expect(submitButton).toBeDisabled();
});
