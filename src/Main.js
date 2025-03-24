import restaurantfood from './assets/restauranfood.jpg';
import './App.css'

function Main() {
    return (
        <main>
            <section className='hero'>
                <div className='container'>
                    <div>
                        <h1>Little Lemon</h1>
                        <p className='subtitle'>Chicago</p>
                        <p className='lead-text'>Little Lemons is a charming neighborhood bistro thatserve simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                        <button className='cta'>Reserve a Table</button>
                    </div>
                    <div className='restaurantfood'>
                        <img src={restaurantfood}  alt='Restaurant food' width={300} height={300}/>
                    </div>
                </div>
            </section>

            <section className='special'>
                <div className="container">
                    <div className='top'>
                        <h2>This weeks Specials!</h2>
                        <button className='cta'>Online Menu</button>
                    </div>
                    <div className='cards'>
                        Les cards par ici Little Lemons is a charming neighborhood bistro thatserve simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials. Little Lemons is a charming neighborhood bistro thatserve simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials. Little Lemons is a charming neighborhood bistro thatserve simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                    </div>
                </div>
            </section>

            <section>
                <div className="container">Testimonials</div>
            </section>

            <section>
                <div className="container">About Us</div>
            </section>
        </main>
    )
}

export default Main;