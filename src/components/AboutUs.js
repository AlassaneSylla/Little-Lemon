import chefs from '../assets/Mario and Adrian A.jpg';
import chefMarco from '../assets/restaurant chef B.jpg';
import '../App.css';

function AboutUs() {
    return (
        <section id='about' className='about-us' aria-labelledby="about-title">
            <div className="container">
                <div className='left'>
                    <h2 id="about-title">Little Lemon</h2>
                    <p className='subtitle'>Chicago</p>
                    <p className='lead-text' aria-describedby="restaurant-description">Little Lemon is a charming neighborhood bistro offering delicious, no-fuss cuisine and classic cocktails in a vibrant yet relaxed setting. With a locally sourced menu and daily specials, it's the perfect spot to enjoy fresh, flavorful dishes in a warm and inviting atmosphere. Every dish is crafted with high-quality ingredients, celebrating the rich flavors of the region. Whether you're stopping by for a quick bite or a leisurely meal, Little Lemon promises a delightful dining experience.</p>
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