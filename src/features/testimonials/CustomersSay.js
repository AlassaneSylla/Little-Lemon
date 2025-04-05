import { testimonials } from '../../utils/api';
import '../../App.css';

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
                    {testimonials.map((testimonial, id) => (
                    <div key={testimonial.id} className='testimonial-card'>
                        <div>
                            <div className='clientImage'>
                                <img src={testimonial.image} alt={`${testimonial.name} profile`} width={50} height={50}/>
                            </div>
                            <h5 className='clientName'>{testimonial.name}</h5>
                        </div>
                        <p>{testimonial.message}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CustomersSay;