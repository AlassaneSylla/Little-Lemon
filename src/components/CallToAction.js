import {Link} from "react-router-dom";
import restaurantfood from '../assets/restauranfood.jpg';
import '../App.css'

function CallToAction() {
    return(
        <section className='hero'>
            <div className='container'>
                <div>
                    <h1>Little Lemon</h1>
                    <p className='subtitle'>Chicago</p>
                    <p className='lead-text'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <p>
                        <Link to="/reservation" role="button" className="cta-reservation">Reserve a Table</Link>
                    </p>
                </div>
                <div className='restaurantfood'>
                    <img src={restaurantfood}  alt='Restaurant food' width={300} height={300}/>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;