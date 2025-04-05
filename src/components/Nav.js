import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "../App.css";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav id='navbar' className="navbar" aria-label="Main navigation">
                <div className="container">
                    <Link to="/">
                        <img src={logo} alt="Little Lemon logo" />
                    </Link>

                    <div className="burger-menu" onClick={toggleMenu}>
                        <div className={isMenuOpen ? "line open" : "line"}></div>
                        <div className={isMenuOpen ? "line open" : "line"}></div>
                        <div className={isMenuOpen ? "line open" : "line"}></div>
                    </div>

                    <ul className={`nav-menu ${isMenuOpen ? "menu-active" : ""}`}>
                        <li><Link className="links" to="/">Home</Link></li>
                        <li><a className="links" href="#about">About</a></li>
                        <li><Link className="links" to="/menu">Menu</Link></li>
                        <li><Link className="links" to="/reservation">Reservation</Link></li>
                        <li><Link className="links" to="/order-online">Order Online</Link></li>
                        <li><Link className="links" to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
