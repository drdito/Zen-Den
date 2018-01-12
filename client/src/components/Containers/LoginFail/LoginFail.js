import React from 'react';
import Container from '../../Bootstrap/Container';
import { Link } from "react-router-dom";

const LoginFail = () => (
  <div>
  <h1 id='header'> Your Email/Password Combination is Incorrect</h1>
  <Link to='/'><button>Return to Login</button> </Link>
  </div>
  );
  
  export default LoginFail;