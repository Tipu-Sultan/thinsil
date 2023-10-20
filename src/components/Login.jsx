import React from 'react'
import "../style/login.css";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
    <div class="container">
        <div class="login-box">
            <h1>Login</h1>
            <form>
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
                <Link href="#">Forgot Password?</Link>
                <p>Don't have an account? <Link href="/register">Sign up</Link></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login