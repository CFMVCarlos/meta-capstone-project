import React from "react"; // Importing React to use JSX
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation
import Bruchetta from "../assets/bruchetta.svg"; // Importing the image for Bruschetta
import GreekSalad from "../assets/greek salad.jpg"; // Importing the image for Greek Salad
import LemonDessert from "../assets/lemon dessert.jpg"; // Importing the image for Lemon Dessert
import Card from "./Card"; // Importing the Card component to display individual menu items

// Highlights component to display special dishes of the week
export default function Highlights() {
  return (
    <section className="highlights">
      <h1>This weeks specials!</h1>
      {/* Title of the section listing weekly specials */}
      {/* Link to the online menu page */}
      <Link to="#">
        <button>Online Menu</button>
        {/* Button to navigate to the online menu */}
      </Link>
      {/* Section containing the list of highlighted dishes */}
      <section className="cards">
        {/* Card for Greek Salad, with image, name, price, and description */}
        <Card name="Greek Salad" price="$12.99" image={GreekSalad}>
          <p>
            The famous Greek salad of crispy lettuce, peppers, olives, and our
            Chicago-style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          {/* Description of the Greek Salad */}
        </Card>

        {/* Card for Bruschetta, with image, name, price, and description */}
        <Card name="Bruchetta" price="$ 5.99" image={Bruchetta}>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          {/* Description of the Bruschetta */}
        </Card>

        {/* Card for Lemon Dessert, with image, name, price, and description */}
        <Card name="Lemon Dessert" price="$ 5.00" image={LemonDessert}>
          <p>
            This comes straight from Grandma's recipe book. Every last
            ingredient has been carefully sourced and is as authentic as you can
            imagine.
          </p>
          {/* Description of the Lemon Dessert */}
        </Card>
      </section>
    </section>
  );
}
