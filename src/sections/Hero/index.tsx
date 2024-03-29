import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import "./styles.css";
import restaurantDish from "@/assets/dish-pic.png";

export function Hero() {
    return (
        <section className="heroContainer" id="hero">
            <div className="heroContent">
                <div className="heroInfo">
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </div>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/reservation">
                        <Button text="Reserve a table" />
                    </Link>
                </div>
                <div className="imgContent">
                    <img src={restaurantDish} alt="restaurant dish" />
                </div>
            </div>
        </section>
    )
}