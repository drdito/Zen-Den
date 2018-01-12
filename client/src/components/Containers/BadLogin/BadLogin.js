import React from "react";
import Container from '../../Bootstrap/Container';
import { Link } from 'react-router-dom'
import "./badlogin.css";

const BadLogin = () => (
  <div>
    <Container>
      <header className="masthead">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <img className="loginLogo" src="img/ZenDenLogoTrans.png" alt="Zen Den Logo" />
                  <h2 className="sorryText">We're sorry, that Email/Password combo is invalid</h2>  
                  <Link to="/"><button className="btn btn-lg btn-primary btn-block signUp">Return to Login</button></Link>
                </div>
              </div>
            </div>
          </div>
      </header>
    </Container>
  </div>
)

export default BadLogin;