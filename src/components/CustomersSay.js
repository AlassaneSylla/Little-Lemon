import Testimonial from './Testimonial';
import '../App.css';

function CustomersSay() {
    return (
        <section
            className="customers-say"
            aria-labelledby="testimonials-title"
        >
            <div className='container'>
                <div>
                    <h2 id="testimonials-title">Testimonials</h2>
                </div>
                <div className="card-container" aria-label="Customer testimonials">
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                </div>
            </div>
        </section>
    );
}

export default CustomersSay;