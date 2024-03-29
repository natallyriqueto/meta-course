import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import greekSalada from "@/assets/greek-salad.png";
import bruchetta from "@/assets/bruchetta.png";
import lemonDessert from "@/assets/lemon-dessert.png";
import "./styles.css";

export function Menu() {
    return (
        <section id="menu">
            <div className="menuContainer">
                <div className="menuText">
                    <h2>This weeks specials</h2>
                    <Button text="Online menu" />
                </div>
                <div className="cardContainer">
                    <Card
                        img={greekSalada}
                        title="Greek Salad"
                        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                        price="12.99"
                    />
                      <Card
                        img={bruchetta}
                        title="Bruchetta"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                        price="5.99"
                    />
                      <Card
                        img={lemonDessert}
                        title="Lemon Dessert"
                        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                        price="5.00"
                    />
                </div>
            </div>
        </section>
    )
}