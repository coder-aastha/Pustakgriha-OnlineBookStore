import React from "react";
import "./css/App.css";
//  import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import axios from 'axios';
import {Routes, Route} from'react-router-dom';
import {Toaster} from 'react-hot-toast'
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import BookDetail from './components/BookDetail'
import "../src/css/UserRegister.css";
import "../src/css/UserLogin.css";
import UserForgotPassword from './components/UserForgotPassword';
import UserResetPassword from './components/UserResetPasspord';
import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";
import FooterUI from "./components/FooterUI";


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
    <Route path="/forgotpassword" element={<UserForgotPassword />}/>
    <Route path='/resetpassword/:id' element={<UserResetPassword />} />
    <Route path='/category/:category' element={<Categories />}/>
    <Route path="/AboutUs" element={<AboutUs />} />
   
    </Routes>
    <FooterUI/>

    </>
  );
}

export default App;
