import { fireEvent, render, screen } from "@testing-library/react"; // Importing testing utilities
import React from "react"; // Importing React
import BookingPage from "./BookingPage"; // Importing the BookingPage component

// Mocking the global fetchAPI function
global.fetchAPI = jest.fn(); // Creating a mock function for fetchAPI to simulate API calls

describe("BookingPage Component", () => {
  // Defining mock data that fetchAPI will return during tests
  const mockFetchAPIResponse = ["12:00 PM", "1:00 PM", "2:00 PM"];

  beforeAll(() => {
    global.alert = jest.fn(); // Mocking the global alert function to avoid actual alert popups during tests
  });

  afterAll(() => {
    jest.restoreAllMocks(); // Restores the original alert and fetchAPI functionality after tests
  });

  beforeEach(() => {
    // Mock fetchAPI to return the predefined list of available times before each test
    global.fetchAPI.mockImplementation(() => mockFetchAPIResponse);
  });

  afterEach(() => {
    // Clear all mocks after each test to ensure no state leakage between tests
    jest.clearAllMocks();
  });

  // Test case to verify that the BookingPage renders with initial available times
  test("renders BookingPage with initial available times", () => {
    render(<BookingPage />); // Rendering the BookingPage component

    // Ensure fetchAPI was called with the current date to initialize available times
    expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));

    // Check if the form and available times are rendered correctly on the page
    expect(screen.getByRole("form")).toBeInTheDocument(); // Check if the form is rendered
    expect(screen.getByText("12:00 PM")).toBeInTheDocument(); // Check if the times are rendered
    expect(screen.getByText("1:00 PM")).toBeInTheDocument();
    expect(screen.getByText("2:00 PM")).toBeInTheDocument();
  });

  // Test case to verify that dispatch action updates the available times when the date is changed
  test("dispatches action to update available times", () => {
    render(<BookingPage />); // Rendering the BookingPage component

    // Simulate an action that updates the available times by changing the date
    const newDate = "2025-01-15"; // New date to be selected
    const updatedTimes = ["10:00 AM", "11:00 AM", "12:00 PM"]; // New available times after the date change
    global.fetchAPI.mockImplementationOnce(() => updatedTimes); // Mocking fetchAPI to return new times for this test

    // Simulate user input in a date picker (or similar element) to change the date
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: newDate }, // Changing the value of the date input
    });

    // Verify fetchAPI was called with the new date
    expect(global.fetchAPI).toHaveBeenCalledWith(new Date(newDate));

    // Verify that the available times have been updated accordingly on the screen
    expect(screen.getByText("10:00 AM")).toBeInTheDocument(); // Check if the updated times are displayed
    expect(screen.getByText("11:00 AM")).toBeInTheDocument();
    expect(screen.getByText("12:00 PM")).toBeInTheDocument();
  });
});
