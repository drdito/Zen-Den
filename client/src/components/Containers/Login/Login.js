import React from "react";
import "./login.css";
import Container from '../../Bootstrap/Container';
import LoginForm from '../../LoginForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLoginRequest } from '../../../domains/domainLogin/actions/loginAction';


class Login extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const { userLoginRequest } = this.props;
    return (
      <Container>
        <header className="masthead">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mx-auto">
                  <img className="loginLogo" src="img/ZenDenLogoTrans.png" alt="Zen Den Logo" />
                  <LoginForm userLoginRequest={userLoginRequest}/>   
                  <Link className="signUp" to="/signup"><button className="btn btn-lg btn-primary btn-block signUp" type="submit">Sign up with Email</button></Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        
      </Container>
    );
  };
};

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
};

export default connect(null, { userLoginRequest })(Login);


