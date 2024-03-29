import logo from "@/assets/Logo.svg"
import "./styles.css";
import { Link } from "react-router-dom";

export function Header() {
    const handleClick = (anchor) => {
        const id = anchor;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
    };

    return (
        <div className="headerContainer">
            <header>
                <img src={logo} alt="little lemon logo" />
                <button className="dropdown">Toggle</button>
                <nav className="mainNavigation">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <li><a href="/#about" onClick={() => handleClick("about")}>About</a></li>
                        <li><a href="/#menu" onClick={() => handleClick("menu")}>Menu</a></li>
                        <Link to="/reservation"><li>Reservations</li></Link>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}