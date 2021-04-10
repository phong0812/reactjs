import react from "react";
import PropTypes from 'prop-types';

const Button = props => 
<button type={props.type} className={props.className} onClick={props.click}>{props.text}</button>

export default Button;
