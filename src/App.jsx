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
import AuthorName from "./components/AuthorName";
import Wishlist from "./components/Wishlist";
import { AuthProvider } from "./components/AuthContext";
import ShoppingCart from "./components/shoppingCart";
// import { useState } from 'react';
import AdminApp from './Admin/AdminApp';
import AdminUploadBook from './Admin/AdminBookUpload'
import AdminManageBook from './Admin/AdminManageBook'
import AdminBookDetail from './Admin/AdminBookDetail'

axios.defaults.baseURL ='http://localhost:3001';
axios.defaults.withCredentials = true

const App =()=> {

  return (
    <>

    <AuthProvider>
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
    <Route path='/author/:authorName' element={<AuthorName />}/>
    <Route path="/Wishlist" element={<Wishlist />}/>
    <Route path="/shopping-cart" element={<ShoppingCart />} />
    <Route path="/admin" element={<AdminApp/>}/>
    <Route path="/upload-book" element={<AdminUploadBook/>}/>
    <Route path="/manage-book" element={<AdminManageBook/>}/>
    <Route path="/booklisting" element={<AdminBookDetail/>}/>
    </Routes>
    <FooterUI/>
    </AuthProvider>

    </>
  );
}

export default App;
