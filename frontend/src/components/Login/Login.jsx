import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className="container">
            <form className="auth-form">
                <h2>Login or Signup</h2>
                
                <div className="auth-options">
                    <div className="email-auth">
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                        <p><a href="#">Forgot your password?</a></p>
                    </div>
                    <div className="divider">OR</div>
                    <div className="google-auth">
                        <button className="google-login">Login with Google</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
