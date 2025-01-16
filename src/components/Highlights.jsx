import React from "react";
import Card from "./Card";
import GreekSalad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon dessert.jpg";
import { Link } from "react-router-dom";

export default function Highlights() {
  return (
    <section className="highlights">
      <h1>This weeks specials!</h1>

      <Link to="#">
        <button>Online Menu</button>
      </Link>

      <section className="cards">
        <Card name="Greek Salad" price="$12.99" image={GreekSalad}>
          <p>
            The famous Greek salad of crispy lettuce, peppers, olives, and our
            Chicago-style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
        </Card>
        <Card name="Bruchetta" price="$ 5.99" image={Bruchetta}>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
        </Card>
        <Card name="Lemon Dessert" price="$ 5.00" image={LemonDessert}>
          <p>
            This comes straight from Grandma's recipe book. Every last
            ingredient has been carefully sourced and is as authentic as you can
            imagine.
          </p>
        </Card>
      </section>
    </section>
  );
}
