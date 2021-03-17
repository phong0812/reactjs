import React from 'react';
import './App.css';
import './form.scss';
import SignUp from './components/form/sign-up';
import SignIn from './components/form/sign-in';
import TabGroup from './components/form/tab-group';

function App() {
  return (
    <div className="form">
    <TabGroup>
        <li label ="Sign Up" class="tab active"><a href="#signup">Sign Up</a></li>
        <li label ="Log In" class="tab"><a href="#login">Log In</a></li>

      </TabGroup>      
      
      <div className="tab-content">
      <SignUp></SignUp>

    <SignIn></SignIn>

      </div>      
    </div>
  );
}

export default App;
