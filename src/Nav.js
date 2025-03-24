import {Link} from "react-router-dom";
import logo from "./assets/Logo.svg";
import './App.css'

function Nav() {
    return (
        <nav>
             <div className='container'>
                <div>
                    <Link to="/">
                        <img src={logo} alt="Little Lemon logo"/>
                    </Link>
                    <ul>
                        <li><Link className='links' to="/">Home</Link></li>
                        <li><Link className='links' to="/about">About</Link></li>
                        <li><Link className='links' to="/menu">Menu</Link></li>
                        <li><Link className='links' to="/reservation">Reservation</Link></li>
                        <li><Link className='links' to="/order-online">Order Online</Link></li>
                        <li><Link className='links' to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;