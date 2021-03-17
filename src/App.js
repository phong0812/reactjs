import React from 'react';
import './App.css';
import './form.scss';
import SignUp from './components/form/sign-up';
import SignIn from './components/form/sign-in';
import Tab from './components/form/tabs';

function App() {
  return (
    <div className="form">
      
      <ul className="tab-group">
        <Tab class='tab' link='#signup' buttonName='Sign Up'></Tab>
        <Tab class='tab' link='#login' buttonName='Log In'></Tab>
      </ul>
      
      <div className="tab-content">
        <SignUp></SignUp>

        <SignIn></SignIn>
               
      </div>      
    </div>
  );
}

export default App;
