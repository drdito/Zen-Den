import React from "react";
import "./signup.css";
import Container from '../../Bootstrap/Container';
import SignUpForm from '../../SignUpForm';



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
                  <SignUpForm/>
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
