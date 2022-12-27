import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <div className='container login-content'>
      <div className='login d-flex justify-content-center align-items-center'>
        <form className='w-50 h-75 p-5 rounded-start bg-dark-blue'>
          <h1 className='mb-5 text-center'>Welcome back to Injazy</h1>
          <div className='form-group d-flex flex-column'>
            <label>User Name</label>
            <input type='text' className='bg-dark-blue' id='username' />
          </div>

          <div className='form-group d-flex flex-column mb-3'>
            <label>Password</label>
            <input type='password' className='bg-dark-blue' id='password' />
          </div>
          <Link to='/resetPass' className='login-link'>
            Forget password?
          </Link>
          <div className='d-flex justify-content-center align-items-center'>
            <button type='submit' className='mt-3 mb-5 bg-pink p-2 login-btn'>
              Sign In
            </button>
          </div>
          <p>
            You don't have an account?{" "}
            <Link to='/register' className='login-link'>
              Sign up
            </Link>
          </p>
        </form>
        <div className='image h-75 w-50 rounded-end'></div>
      </div>
    </div>
  );
}

export default Login;
