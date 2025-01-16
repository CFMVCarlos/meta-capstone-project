import React, { useEffect, useState } from "react"; // Importing React and hooks (useEffect, useState)
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook for navigation

// ConfirmedBooking component to show a confirmation message and handle fade-out and redirection
export default function ConfirmedBooking() {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [fadeOut, setFadeOut] = useState(false); // State to manage fade-out effect

  // useEffect hook to set up timers for fade-out and redirection
  useEffect(() => {
    // Timer to start the fade-out effect after 4 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);

    // Timer to redirect the user to the homepage ("/") after 5 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/"); // Navigate to the homepage
    }, 5000);

    // Cleanup function to clear the timers when the component unmounts
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section
      aria-labelledby="confirmation-heading" // For accessibility, links this section to the heading
      className={`confirmation-page ${fadeOut ? "fade-out" : ""}`} // Apply the fade-out class conditionally
    >
      <h1 id="confirmation-heading">Booking Confirmed</h1> {/* Main heading */}
      <p>
        Thank you for your reservation! We look forward to serving you.
      </p>
      {/* Confirmation message */}
      <p>If you have any questions, feel free to contact us.</p>
      {/* Contact information */}
    </section>
  );
}
