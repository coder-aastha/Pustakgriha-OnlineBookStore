import React from "react";
import "./css/App.css";
import axios from 'axios';
import {Routes, Route} from'react-router-dom';
import {Toaster} from 'react-hot-toast'



import { Home } from "./Home page/Home";

import UserLogin from "./Auth/UserLogin";
import UserRegister from "./Auth/UserRegister";
import UserForgotPassword from './Auth/UserForgotPassword';
import UserResetPassword from './Auth/UserResetPasspord';

import BookDetail from './components/BookDetail'
import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";
import AuthorName from "./components/AuthorName";
import Wishlist from "./components/Wishlist";
import ShoppingCart from "./components/shoppingCart";

import AdminApp from './Admin/AdminApp';
import AdminUploadBook from './Admin/AdminBookUpload'
import AdminManageBook from './Admin/AdminManageBook'
import AdminBookDetail from './Admin/AdminBookDetail'

axios.defaults.baseURL ='http://localhost:3001';
axios.defaults.withCredentials = true

const App =()=> {

  return (
    <>
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
    <Route path="/AdminManageBook/:id" element={<AdminManageBook/>}/>
    <Route path="/booklisting" element={<AdminBookDetail/>}/>
    </Routes>
    


    </>
  );
}

export default App;
