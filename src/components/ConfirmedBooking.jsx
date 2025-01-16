import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000); // Start fade-out after 4 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/"); // Redirect to "/" after 5 seconds
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <section
      aria-labelledby="confirmation-heading"
      className={`confirmation-page ${fadeOut ? "fade-out" : ""}`}
    >
      <h1 id="confirmation-heading">Booking Confirmed</h1>
      <p>Thank you for your reservation! We look forward to serving you.</p>
      <p>If you have any questions, feel free to contact us.</p>
    </section>
  );
}
