import Testimonial from './Testimonial';
import './App.css';

function CustomersSay() {
    return (
        <section className='customers-say'>
            <div className='container'>
                <div>
                    <h2>Testimonials</h2>
                </div>
                <div className='card-container'>
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