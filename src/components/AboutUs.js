import chefs from '../assets/Mario and Adrian A.jpg';
import chefMarco from '../assets/restaurant chef B.jpg';
import '../App.css';

function AboutUs() {
    return (
        <section className='about-us' aria-labelledby="about-title">
            <div className="container">
                <div className='left'>
                    <h2 id="about-title">Little Lemon</h2>
                    <p className='subtitle'>Chicago</p>
                    <p className='lead-text' aria-describedby="restaurant-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div className='right'>
                    <img src={chefs} alt='the chefs Mario & Adriane in the kitchen'/>
                    <img className='img1' src={chefMarco} alt='chef Mario'/>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;