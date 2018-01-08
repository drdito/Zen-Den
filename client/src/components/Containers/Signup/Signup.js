import React from "react";
import "./signup.css";
import Container from '../../Bootstrap/Container';
import SignUpForm from '../../SignUpForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignupRequest } from '../../../domains/domainSignUp/actions/signupActions';




class Dashboard extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const { userSignupRequest } = this.props;
    return (
      <Container>
        <header className="masthead">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mx-auto">
                  <h1 className="brand-heading">Zen Den</h1>
                  <SignUpForm userSignupRequest={userSignupRequest} />
                </div>
              </div>
            </div>
          </div>
        </header>
        
      </Container>
    );
  };
};

SignUpForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default connect(null, { userSignupRequest })(Dashboard);
