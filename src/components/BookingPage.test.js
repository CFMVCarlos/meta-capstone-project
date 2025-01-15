import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

// Mocking the global fetchAPI function
global.fetchAPI = jest.fn();

describe("BookingPage Component", () => {
  const mockFetchAPIResponse = ["12:00 PM", "1:00 PM", "2:00 PM"];

  beforeAll(() => {
    global.alert = jest.fn(); // Mock the alert function
  });
  
  afterAll(() => {
    jest.restoreAllMocks(); // Restore the original alert after tests
  });

  beforeEach(() => {
    // Mock fetchAPI to return a predefined list of available times
    global.fetchAPI.mockImplementation(() => mockFetchAPIResponse);
  });

  afterEach(() => {
    // Reset the mock after each test
    jest.clearAllMocks();
  });

  test("renders BookingPage with initial available times", () => {
    render(<BookingPage />);

    // Ensure fetchAPI was called to initialize times
    expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));

    // Check if the availableTimes are rendered
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByText("12:00 PM")).toBeInTheDocument();
    expect(screen.getByText("1:00 PM")).toBeInTheDocument();
    expect(screen.getByText("2:00 PM")).toBeInTheDocument();
  });

  test("dispatches action to update available times", () => {
    render(<BookingPage />);

    // Simulate an action that updates the available times
    const newDate = "2025-01-15";
    const updatedTimes = ["10:00 AM", "11:00 AM", "12:00 PM"];
    global.fetchAPI.mockImplementationOnce(() => updatedTimes);

    // Assuming there is a date picker or other interaction in BookingForm to trigger the dispatch
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: newDate } });

    // Verify fetchAPI was called with the new date
    expect(global.fetchAPI).toHaveBeenCalledWith(new Date(newDate));

    // Verify that the available times have been updated accordingly
    expect(screen.getByText("10:00 AM")).toBeInTheDocument();
    expect(screen.getByText("11:00 AM")).toBeInTheDocument();
    expect(screen.getByText("12:00 PM")).toBeInTheDocument();
  });
});
