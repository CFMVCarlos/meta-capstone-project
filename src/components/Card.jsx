import React from "react"; // Importing React

// Card component that displays a meal with its name, price, image, and children (optional content)
export default function Card({ name, price, image, children }) {
  return (
    <section className="card">
      {/* Main container for the card */}
      <img
        src={image} // Image of the meal
        alt="A delicious meal" // Alt text for the image
        width="100%" // Ensures the image takes up full width of its container
        height="100%" // Ensures the image takes up full height of its container
      />
      <section className="card-body">
        {/* Body section of the card */}
        <section className="card-header">
          {/* Header section for name and price */}
          <h2>{name}</h2> {/* Display the name of the meal */}
          <h2 className="card-price">{price}</h2>
          {/* Display the price of the meal */}
        </section>
        {children} {/* Render any additional content passed as children */}
        <h3>Order a delivery 🛵</h3>
        {/* Call-to-action for ordering delivery */}
      </section>
    </section>
  );
}
