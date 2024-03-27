import logo from "@/assets/Logo.svg"
import "./styles.css";

export function Footer() {
    return (
        <section>
            <footer>
                <div>
                    <img src={logo} alt="little lemon logo" />
                </div>
                <nav className="footerNav">
                    <ul className="footerList">
                        <li><strong>Navigation</strong></li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                    <ul className="footerList">
                        <li><strong>Contact</strong></li>
                        <li>Chicago</li>
                        <li>(123) 123-123-12</li>
                        <li>little_lemon@outlook.com</li>
                    </ul>
                    <ul className="footerList">
                        <li><strong>Social Media Links</strong></li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Facebook</li>
                    </ul>
                </nav>
            </footer>
        </section>
    )
}