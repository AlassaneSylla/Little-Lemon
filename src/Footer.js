import restaurant from './assets/restaurant.jpg';
import {Link} from "react-router-dom";
import './App.css'

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='InsideLittleLemon'>
                    <img src={restaurant} alt='Inside the Little Lemon restaurant' width={190} height={270}/>
                </div>
                <div className='footer-nav'>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><Link className='links'  to="/">Home</Link></li>
                        <li><Link className='links' to="/about">About</Link></li>
                        <li><Link className='links' to="/menu">Menu</Link></li>
                        <li><Link className='links' to="/reservation">Reservation</Link></li>
                        <li><Link className='links' to="/order-online">Order Online</Link></li>
                        <li><Link className='links' to="/login">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>Chicago, 142  local street</p>
                </div>
                <div>
                    <h4>Social Media Link</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;