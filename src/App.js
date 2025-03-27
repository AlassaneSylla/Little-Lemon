import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import AboutUs from './AboutUs';
import BookingForm from './BookingForm';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/Reservation' element={<BookingForm/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
