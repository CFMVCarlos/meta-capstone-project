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
    render(<BookingForm availableTimes={availableTimes} dispatchAvailableTimes={mockDispatch} />);

    // Check that all form elements are rendered
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { value: /Make Your Reservation/i })).toBeInTheDocument();
  });

  test("allows users to fill the form and submit", () => {
    render(<BookingForm availableTimes={availableTimes} dispatchAvailableTimes={mockDispatch} />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-01-15" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "12:00 PM" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { value: /Make Your Reservation/i }));

    // Validate form submission
    expect(mockDispatch).toHaveBeenCalledWith({ type: "update", date: "2025-01-15" });
    expect(screen.getByLabelText(/Choose date/i)).toHaveValue("2025-01-15");
    expect(screen.getByLabelText(/Choose time/i)).toHaveValue("12:00 PM");
    expect(screen.getByLabelText(/Number of guests/i)).toHaveValue(5);
    expect(screen.getByLabelText(/Occasion/i)).toHaveValue("Birthday");
  });

  test("dispatches date updates on change", () => {
    render(<BookingForm availableTimes={availableTimes} dispatchAvailableTimes={mockDispatch} />);

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-01-15" } });

    expect(mockDispatch).toHaveBeenCalledWith({ type: "update", date: "2025-01-15" });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
