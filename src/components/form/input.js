import react from "react";
import PropTypes from 'prop-types';

const Input = props => 
<input type={props.type} required={props.required} value={props.value} onChange={props.onChange} name={props.name}/>

export default Input;

