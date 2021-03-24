import React from 'react';
// import './App.css';
// import './form.scss';
// import SignUp from './components/form/sign-up';
// import SignIn from './components/form/sign-in';
// import Tab from './components/form/tabs';
// import Row from './components/to-do/row';
import Todo from './components/to-do/index';
// this.state = {

// }

function App() {
  // render(
  //   onClick() {
  //     console.log('abc');
  //   };
  
  // )
  return (
    // <div className="form">
      
    //   <ul className="tab-group">
    //     <Tab class='tab' link='#signup' buttonName='Sign Up'></Tab>
    //     <Tab class='tab' link='#login' buttonName='Log In'></Tab>
    //   </ul>
      
    //   <div className="tab-content">
    //     <SignUp></SignUp>

    //     <SignIn></SignIn>
               
    //   </div>      
    // </div>
      <form>
        <p>Please select your preferred contact method:</p>
        <div>
          <input type="radio" id="contactChoice1"
          name="contact" value="email"/>
          <label htmlFor="contactChoice1">Email</label>

          <input type="radio" id="contactChoice2"
          name="contact" value="phone"/>
          <label htmlFor="contactChoice2">Phone</label>

          <input type="radio" id="contactChoice3"
          name="contact" value="mail"/>
          <label htmlFor="contactChoice3">Mail</label>
        </div>
        <Todo></Todo>
      </form>
  );
}

export default App;
