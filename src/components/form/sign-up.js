import React from "react";
import Input from './input';
import PropTypes from 'prop-types';
import Button from './button';
import Submit from './submit';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);


  }
  handleChange(event) {
    console.log(event);
    this.setState({
      ...this.state, [event.target.name]: event.target.value
    });
  }

  submit() {
    var newLine = "\r\n";
    var msg = 'Fist Name: ';
    msg += this.state.first_name;
    msg += newLine;
    msg += 'Last Name: ';
    msg += this.state.last_name;
    msg += newLine;
    msg += 'Email: ';
    msg += this.state.email;
    msg += newLine;
    msg += 'Password: ';
    msg += this.state.password;

    alert(msg);
    return;
  }
  render() {
    return(
    <div id="signup">   
              <h1>Sign Up for Free</h1>
              
              <form action="/" method="post">
              
              <div className="top-row">
                <div className="field-wrap">
                  <label>
                    First Name<span className="req">*</span>
                  </label>
                  <Input type="text" required="required" value={this.state.first_name} onChange={this.handleChange} name="first_name"/>
                </div>
            
                <div className="field-wrap">
                  <label>
                    Last Name<span className="req">*</span>
                  </label>
                  <Input type="text" required="required" value={this.state.last_name} onChange={this.handleChange} name="last_name"/>
                </div>
              </div>

              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <Input type="email" required="required" value={this.state.email} onChange={this.handleChange} name="email"/>
              </div>
              
              <div className="field-wrap">
                <label>
                  Set A Password<span className="req">*</span>
                </label>
                <Input type="password" required="required" value={this.state.password} onChange={this.handleChange} name="password"/>
              </div>
              
              <Button type="submit" className="button button-block" text="Get Started" click={this.submit}></Button>
              
              </form>
    </div>
    );
  }
}

export default SignUp
