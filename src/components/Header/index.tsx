import logo from "@/assets/Logo.svg"
import "./styles.css";

export function Header() {
    return (
        <div className="headerContainer">
            <header>
                <img src={logo} alt="little lemon logo" />
                <button className="dropdown">Toggle</button>
                <nav className="mainNavigation">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}