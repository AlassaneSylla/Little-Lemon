import Card from '../components/Card';
import greek from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import dessert from '../assets/lemon dessert.jpg';
import '../App.css';

function Specials() {
    return (
        <section className='special'>
                <div className="container">
                    <div className='top'>
                        <h2>This weeks Specials!</h2>
                        <button className='cta'>Online Menu</button>
                    </div>
                    <div className='cards'>
                        <Card
                            image={greek}
                            title='Greek Salad'
                            price='$12.99'
                            description='The famous greek salad of crispy lettuce, pepers, olives and our Chicago style feta cheese, garnished width crunchy garlic and rosemary croutons.'
                        />
                        <Card
                            image={bruchetta}
                            title='Bruchetta'
                            price='$5.99'
                            description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seseasoned with salt and olive oil.'
                        />
                        <Card
                            image={dessert}
                            title='Lemon Dessert'
                            price='$5.00'
                            description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagenied."
                        />
                    </div>
                </div>
            </section>
    );
}

export default Specials;