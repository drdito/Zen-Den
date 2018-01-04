import React from "react";
import ReactDOM from 'react-dom';
import "./login.css";
import Container from '../../Bootstrap/Container';
import { GoogleLogin } from 'react-google-login';


class Dashboard extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (response) {
    console.log(response);
  }

  render() {
    return (
      <Container>
        <header className="masthead">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mx-auto">
                  <h1 className="brand-heading">Zen Den</h1>
                  <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                      </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                    <GoogleLogin
                      clientId="707165368984-qv0h5ui2janpaedbeu9ojomivq2hc02s.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                    /> 
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>
        
      </Container>
    );
  };
};

export default Dashboard;
