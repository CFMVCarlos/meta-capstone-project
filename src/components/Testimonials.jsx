import React from "react"; // Importing React
import ReviewFaces from "../assets/ReviewsFaces.jpg"; // Importing an image for review avatars

// Array containing testimonial data for each customer
const testimonials = [
  {
    first_name: "Jane",
    last_name: "Carter",
    image: { ReviewFaces }, // Avatar image for the customer
    rating: 5, // Rating given by the customer (out of 5)
    feedback:
      "Absolutely fantastic! The service exceeded my expectations, and everything was handled with professionalism. Highly recommended!", // Customer's feedback
  },
  {
    first_name: "Michael",
    last_name: "Adams",
    image: { ReviewFaces },
    rating: 4,
    feedback:
      "Great overall experience. A few minor improvements could be made, but I was very happy with the results.",
  },
  {
    first_name: "Emily",
    last_name: "Johnson",
    image: { ReviewFaces },
    rating: 5,
    feedback:
      "This is the best experience I’ve had so far! Everything was seamless, and the attention to detail was impressive.",
  },
  {
    first_name: "Daniel",
    last_name: "Smith",
    image: { ReviewFaces },
    rating: 3,
    feedback:
      "Decent experience, though there were a few hiccups along the way. It has potential to be amazing with some adjustments.",
  },
];

// Testimonials component to render all customer reviews
export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2> {/* Title of the testimonials section */}
      <section className="cards">
        {/* Container for all testimonial cards */}
        {/* Iterate over the testimonials array to display each review */}
        {testimonials.map((testimonial, index) => (
          <section className="card" key={index}>
            {/* Card for each testimonial */}
            <section className="rating">
              {/* Render the rating stars based on the rating */}
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
              {/* Render a star for each rating point */}
            </section>
            <section className="card-header">
              {/* Display customer avatar */}
              <img src={ReviewFaces} alt={`${testimonial.first_name} avatar`} />
              <section>
                <h3>{testimonial.first_name}</h3>
                {/* First name of the customer */}
                <h3>{testimonial.last_name}</h3>
                {/* Last name of the customer */}
              </section>
            </section>
            <p>{testimonial.feedback}</p>
            {/* Feedback text from the customer */}
          </section>
        ))}
      </section>
    </section>
  );
}
