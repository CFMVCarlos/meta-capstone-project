import React from "react";

export default function Card({ name, price, image, children }) {
  return (
    <section className="card">
      <img
        src={image}
        alt="A delicious meal"
        width="100%"
        height="100%"
      />
      <section className="card-body">
        <section className="card-header">
          <h2>{name}</h2>
          <h2 className="card-price">{price}</h2>
        </section>
        {children}
        <h3>Order a delivery 🛵</h3>
      </section>
    </section>
  );
}
