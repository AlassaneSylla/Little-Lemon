import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Main from './pages/Main';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import OrderOnline from './features/order/OrderOnline';
import LogIn from './features/auth/LogIn';
import BookingForm from './features/booking/BookingForm';
import Footer from './components/Footer';
import ConfirmedBooking  from './features/booking/ConfirmedBooking';
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
        <Nav/>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/order-online' element={<OrderOnline/>}></Route>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/confirmation' element={<ConfirmedBooking/>}></Route>
          <Route path='/reservation' element={<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} addBooking={addBooking} bookedTimes={bookedTimes} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
