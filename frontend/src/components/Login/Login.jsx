// Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="container">
            <div className="form-container">
                <div className="tab">
                    <button 
                        className={isLogin ? 'active' : ''} 
                        onClick={() => setIsLogin(true)}>
                        Login
                    </button>
                    <button 
                        className={!isLogin ? 'active' : ''} 
                        onClick={() => setIsLogin(false)}>
                        Register
                    </button>
                </div>
                {isLogin ? (
                    <form>
                        <h2>Login</h2>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                        <a href="#" className="link">Forgot Password?</a>
                    </form>
                ) : (
                    <form>
                        <h2>Register</h2>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Confirm Password" required />
                        <button type="submit">Register</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
