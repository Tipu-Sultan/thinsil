import React from 'react'
import "../style/login.css";
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <>
    <div class="container">
        <div class="login-box">
            <h1>Login</h1>
            <form>
            <div class="input-container">
                    <label for="username">Password</label>
                    <input type="text" id="username" name="username" placeholder="Enter your name" required/>
                </div>
                <div class="input-container">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required/>
                </div>
                <div class="input-container">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                </div>
                <button type="submit">Log In</button>
            </form>
            <div class="options">
                <p>have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register