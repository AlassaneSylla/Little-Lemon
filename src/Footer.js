import restaurant from './assets/restaurant.jpg';
import './App.css'

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='InsideLittleLemon'>
                    <img src={restaurant} alt='Inside the Little Lemon restaurant' width={190} height={270}/>
                </div>
                <div>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Reservation</li>
                        <li>Menu</li>
                        <li>Order Online</li>
                        <li>Login</li>
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