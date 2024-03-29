import staffIMG from "@/assets/mario-and-adrian.jpg";
import staffKitchenIMG from "@/assets/mario-and-adrian-2.jpg";
import "./styles.css";

export function About() {
    return (
        <section id="about">
            <div className="aboutContainer">
                <div className="aboutInfo">
                    <div>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                    </div>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food
                        and classic coktails in a lively but casual environment. The restaurant
                        features a locally-sourced menu with daily specials.
                    </p>
                </div>
                <div className="aboutImgContent">
                    {/* <img src={staffKitchenIMG} alt="little lemon staff cooking" />
                    <img src={staffIMG} alt="little lemon staff" /> */}
                </div>
            </div>
        </section>
    )
}