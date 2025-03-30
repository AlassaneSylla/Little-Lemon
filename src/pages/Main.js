import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
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