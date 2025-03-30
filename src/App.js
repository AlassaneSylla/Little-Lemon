import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './pages/Main';
import AboutUs from './components/AboutUs';
import BookingForm from './pages/BookingForm';
import Footer from './components/Footer';
import { initializeTimes, timesReducer } from './utils/utils';
import './App.css';


function App() {

  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const updateTimes = (selectedDate) => {
      console.log("Date selected :", selectedDate);
      dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/Reservation' element={<BookingForm availableTimes={availableTimes} updateTimes={ updateTimes } />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
