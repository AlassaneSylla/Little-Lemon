import {Link} from "react-router-dom";
import logo from "../assets/Logo .svg";
import '../App.css';

function ConfirmedBooking() {
    return(
        <section>
            <div className='container confirmation-text'>
                <h1>Reservation Confirmed!</h1>
                <p>Thank you for your reservation. We look forward to seeing you!</p>
                <Link className="confirm-logo"><img src={logo} alt="Little Lemon logo"/></Link>
                 <p>
                    <Link to="/" role="button" className="cta-reservation">Back To Home</Link>
                </p>
            </div>
        </section>
    );
}

export default ConfirmedBooking;