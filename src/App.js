import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './pages/Main';
import AboutUs from './components/AboutUs';
import BookingForm from './pages/BookingForm';
import Footer from './components/Footer';
import ConfirmedBooking  from './components/ConfirmedBooking';
import { initializeTimes, timesReducer } from './utils/api';
import './App.css';


function App() {

  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const [bookedTimes, setBookedTimes] = useState({});

  const updateTimes = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const addBooking = (date, time) => {
    setBookedTimes(prev => ({
      ...prev,
      [date]: [...(prev[date] || []), time]
    }));
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/confirmation' element={<ConfirmedBooking/>}></Route>
          <Route path='/reservation' element={<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} addBooking={addBooking} bookedTimes={bookedTimes} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
