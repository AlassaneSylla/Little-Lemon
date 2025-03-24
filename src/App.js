import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/about' element={<h2>About</h2>}></Route>
          <Route path='/'></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
