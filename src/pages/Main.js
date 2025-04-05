import CallToAction from '../components/CallToAction';
import Specials from '../features/specials/Specials';
import CustomersSay from '../features/testimonials/CustomersSay';
import AboutUs from '../components/AboutUs';
import '../App.css';

function Main() {
    return (
        <main>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <AboutUs />
        </main>
    )
}

export default Main;