import restaurant from '../assets/restaurant.jpg';
import {Link} from "react-router-dom";
import '../App.css';

function Footer() {
    return (
        <footer role="contentinfo">
            <div className='container'>
                <div className='InsideLittleLemon'>
                    <img
                        src={restaurant}
                        alt='Inside the Little Lemon restaurant'
                        width='auto'
                        height={140}
                    />
                </div>
                <div className="footer-nav" aria-label="Footer navigation">
                    <h4 id="nav-title">Doormat Navigation</h4>
                    <ul aria-labelledby="nav-title">
                        <li><Link className='links'  to="/">Home</Link></li>
                        <li><Link className='links' to="/about">About</Link></li>
                        <li><Link className='links' to="/menu">Menu</Link></li>
                        <li><Link className='links' to="/reservation">Reservation</Link></li>
                        <li><Link className='links' to="/order-online">Order Online</Link></li>
                        <li><Link className='links' to="/login">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 id="contact-title">Contact</h4>
                    <address aria-labelledby="contact-title">
                        <p>Chicago, 142 Local Street</p>
                    </address>
                </div>
                <div aria-label="Social media links">
                    <h4>Social Media Links</h4>
                    <ul className="social-links">
                        <li>
                            <a className='social' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9V12h2.54V9.62c0-2.5 1.49-3.88 3.77-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className='social' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm4.5-3c-.83 0-1.5.67-1.5 1.5S15.67 9 16.5 9 18 8.33 18 7.5 17.33 6 16.5 6z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className='social' href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our TikTok page">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10V6h-3.06c-1.22 0-2.4-.4-3.33-1.15-.92-.75-1.55-1.8-1.85-2.96H12V12h-2v2h2v8c1.64 0 3.2-.51 4.51-1.42 1.32-.91 2.32-2.2 2.88-3.67.26-.7.42-1.43.46-2.17H12V6h2c.07.67.26 1.32.57 1.92.32.6.75 1.14 1.3 1.58.55.44 1.2.76 1.88.92V12h2c0-1.65-.5-3.21-1.42-4.52C17.68 6.17 15.39 6 12 6V2z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;