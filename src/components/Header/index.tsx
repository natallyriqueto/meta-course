import logo from "@/assets/Logo.svg"
import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { List, XSquare } from "phosphor-react";

export function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

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

    const toggleNav = () => {
        setIsNavOpen(state => !state);
    }

    return (
        <div className="headerContainer">
            <header>
                <Link to="/">
                    <img src={logo} alt="little lemon logo" />
                </Link>
                <div className="dropdown" onClick={toggleNav}>
                    {isNavOpen
                    ? <XSquare size={32} />
                    : <List size={32} />
                    }
                </div>
                <nav className={`mainNavigation ${isNavOpen && "mainNavigation-open"}`}>
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