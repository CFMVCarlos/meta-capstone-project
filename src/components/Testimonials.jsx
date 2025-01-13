import React from "react";
import ReviewFaces from "../assets/ReviewsFaces.jpg";

const testimonials = [
  {
    first_name: "Jane",
    last_name: "Carter",
    image: { ReviewFaces },
    rating: 5,
    feedback:
      "Absolutely fantastic! The service exceeded my expectations, and everything was handled with professionalism. Highly recommended!",
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

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <section className="cards">
        {testimonials.map((testimonial, index) => (
          <section className="card" key={index}>
            <section className="rating">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </section>
            <section className="card-header">
              <img src={ReviewFaces} alt={`${testimonial.name} avatar`} />
              <section>
                <h3>{testimonial.first_name}</h3>
                <h3>{testimonial.last_name}</h3>
              </section>
            </section>
            <p>{testimonial.feedback}</p>
          </section>
        ))}
      </section>
    </section>
  );
}
