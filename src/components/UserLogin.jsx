import {useState} from "react";
import "../css/UserLogin.css";
import { MdEmail } from "react-icons/md";
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



function UserLogin() {
  const navigate = useNavigate()
  const[data,setData]=useState({
    email:'',
    password:'',
  })
const loginUser = async (e) =>{
  e.preventDefault()
  const {email,password} = data
  try{
    const{data:{token, user, error}}= await axios.post('/login',{ 
      email,
      password
    });

    if(error){
      toast.error(error);
    } 
    else{
      localStorage.setItem('token',token);
      localStorage.setItem('user',JSON.stringify(user));
      setData({});
      navigate('/');
    }
    // if(data.error){
    //   toast.error(data.error)
    // }
    // else{
    //   setData({});
    //   navigate('/')
    // }
  }catch (error){
    console.log(error)
  }  
}
  return (
    <>
    <div className="main-login-wrapper">
      {/* <div className="bacground-image"></div> */}
      <div className="leftcontent_login"></div>
      <div className="wrapperLogin">
        <div className="form-box">
          <h2>Login</h2>

 
          <form onSubmit={loginUser}>
            <div className="input-box">
              <input type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required />
              <label>Email </label>
              <a href="#">
                  <span className="user-icon-register">
                    <MdEmail />
                  </span>
                </a>
            </div>
 
            <div className="input-box">
              <input type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
               required />
              <label>Password</label>
            </div>
 
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="forgotpassword" className="forgetpassword">
                {""}
                Forgot Password ?
              </a>
            </div>
 
            <button type="submit" className="btn">
              Login
            </button>
 
            <div className="register">
              <p>
                Don't have an account?
                <a href="register" className="Login-link">
                  {" "}
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};
 
export default UserLogin;