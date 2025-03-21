import './App.css'

function Nav() {
    return (
        <nav>
            <a href="index.html">
                <img src="../public/assets/Logo.svg" alt="Logo du site"/>
            </a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;