import react from "react";
import Input from './input';

const SignIn = props => 

<div id="login">   
          <h1>Welcome Back!</h1>
          
          <form action="/" method="post">
          
            <div className="field-wrap">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <Input type="email" req= "required"></Input>
          </div>
          
          <div className="field-wrap">
            <label>
              Password<span className="req">*</span>
            </label>
            <Input type="password"></Input>
          </div>
          
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          
          <button className="button button-block">Log In</button>       
          </form>
</div> 

export default SignIn