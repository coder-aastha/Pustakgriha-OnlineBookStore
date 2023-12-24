import React from "react";
import "./css/App.css";
//  import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
// import ImageSlider from "./components/ImageSlider";
// import Genres from "./components/Genres";
// import BestSellers from "./components/BestSellers";
// import NewArrivals from "./components/NewArrivals";
// import Author from "./components/Author";
// import FooterUI from "./components/FooterUI";
// import DeliveryLocationDay from "./components/DeliveryLocationDay";
import { Home } from "./components/Home";
import axios from 'axios';
import {Routes, Route} from'react-router-dom';
import {Toaster} from 'react-hot-toast'
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import BookDetail from './components/BookDetail'
import "../src/css/UserRegister.css";
import "../src/css/UserLogin.css";
import Categories from "./components/Categories";


axios.defaults.baseURL ='http://localhost:3001';
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration:2000}} />
    <Routes>
      <Route path='/register' element={<UserRegister/>}/>
    <Route path='/login' element={<UserLogin />}/>
    <Route path='/' element={<Home />}/>
    <Route path="/booklisting/:id" element={<BookDetail />} />
    <Route path='/category/:category' element={<Categories />}/>
    
    </Routes>

    </>
  );
}

export default App;
