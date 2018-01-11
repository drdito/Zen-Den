import React from 'react';
import PropTypes from 'prop-types';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      emailAddress: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: ''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.onSubmit.bind(this)}>
        <h2 className="form-signin-heading" id="bootstrapOverride">Please Join our Community!</h2>
        
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input name="emailAddress" value={this.state.emailAddress} onChange={this.onChange.bind(this)} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input name="password" value={this.state.password} onChange={this.onChange.bind(this)} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        
        <label htmlFor="inputPasswordConfirm" className="sr-only">Password Confirm</label>
        <input name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.onChange.bind(this)} type="password" id="inputPasswordConfirm" className="form-control" placeholder="Password" required />
        
        <br/>
        
        <label htmlFor="firstName" className="sr-only">First Name</label>
        <input name="firstName" value={this.state.firstName} onChange={this.onChange.bind(this)} type="text" id="firstName" className="form-control" placeholder="First Name" required />
        
        <label htmlFor="lastName" className="sr-only">Last Name</label>
        <input name="lastName" value={this.state.lastName} onChange={this.onChange.bind(this)} type="text" id="inputPassword" className="form-control last" placeholder="Last Name" required />
        
        <br />
        
        <button className="btn btn-lg btn-primary btn-block signUp" type="submit">Sign Up!</button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default SignUpForm