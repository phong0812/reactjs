import React from "react";
// import Input from './input';
// import PropTypes from 'prop-types';
// import Button from './button';
// import Submit from './submit';

class Row extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    // this.state = {
    //   first_name: '',
    //   last_name: '',
    //   email: '',
    //   password: '',
    // };

    // this.handleChange = this.handleChange.bind(this);
    // this.submit = this.submit.bind(this);


  }
  // handleChange(event) {
  //   console.log(event);
  //   this.setState({
  //     ...this.state, [event.target.name]: event.target.value
  //   });
  // }

  // submit() {
  //   var newLine = "\r\n";
  //   var msg = 'Fist Name: ';
  //   msg += this.state.first_name;
  //   msg += newLine;
  //   msg += 'Last Name: ';
  //   msg += this.state.last_name;
  //   msg += newLine;
  //   msg += 'Email: ';
  //   msg += this.state.email;
  //   msg += newLine;
  //   msg += 'Password: ';
  //   msg += this.state.password;

  //   alert(msg);
  //   return;
  // }
  render() {
    return(
          <li>
            <input type="checkbox"/>
            <label>{this.props.name}</label>
            <button type="button" onClick={this.props.removeRow}>x</button>
          </li>
    );
  }
}

export default Row
