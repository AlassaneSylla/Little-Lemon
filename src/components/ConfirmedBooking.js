import {Link} from "react-router-dom";
import logo from "../assets/Logo .svg";
import '../App.css';

function ConfirmedBooking() {
    return(
        <section
            aria-labelledby="confirmation-title"
            className='container confirmation-text and the return button'
        >
            <div className='container confirmation-text'>
                <h1 id="confirmation-title" aria-live="polite">Reservation Confirmed!</h1>
                <p>Thank you for your reservation. We look forward to seeing you!</p>
                <Link className="confirm-logo"><img src={logo} alt="Little Lemon restaurant logo"/></Link>
                 <p>
                    <Link to="/"
                        role="button"
                        className="cta-reservation"
                        aria-label="Return to the home page"
                    >
                        Back To Home
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default ConfirmedBooking;