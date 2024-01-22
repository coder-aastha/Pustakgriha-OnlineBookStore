import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
const navigate = useNavigate();

const [data, setData] = useState({
    email: '',
    password: '',
});

const loginAdmin = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    
    try {
    const { data: { token, user, error } } = await axios.post('/admin/login', {
        email,
        password
    });

    if (error) {
        toast.error(error);
    } else {
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminUser', JSON.stringify(user));
        setData({});
        navigate('/admin-dashboard');
    }
    } catch (error) {
    console.log(error);
    }
}

return (
    <>
    <div className="main-login-wrapper">
        {/* Your existing layout structure */}

        <div className="wrapperLogin">
        <div className="form-box">
            <h2>Admin Login</h2>

            <form onSubmit={loginAdmin}>
              {/* Similar input boxes as your user login */}
            <div className="input-box">
                <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
                />
                <label>Email </label>
                <a href="#">
                <span className="user-icon-register">
                    <MdEmail />
                </span>
                </a>
            </div>

            <div className="input-box">
                <input
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
                />
                <label>Password</label>
            </div>

            
            <button type="submit" className="btn">
                Login
            </button>

            
            </form>
        </div>
        </div>
    </div>
    </>
);
};

export default AdminLogin;
