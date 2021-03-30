import React from 'react';
// import './App.css';
// import './form.scss';
import SignUp from './components/form/sign-up';
import SignIn from './components/form/sign-in';
// import Tab from './components/form/tabs';
// import Row from './components/to-do/row';
import Todo from './components/to-do/index';
import Page1 from './components/router/page-1';
import Page2 from './components/router/page-2';
import Page3 from './components/router/page-3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  NavLink
} from "react-router-dom";



function App() {

  let routes = (
    <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/" activeStyle={{color: "red"}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={{color: "red"}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeStyle={{color: "red"}}>Dashboard</NavLink>
        </li>
      </ul>

      <hr />

      <Switch>
        {/* let page1 = useRouteMatch("/");
        let page2 = useRouteMatch("/about");
        let page3 = useRouteMatch("/dashboard"); */}
        <Route exact path="/">
          <Page1 />
        </Route>
        <Route path="/about">
          <Page2 />
        </Route>
        <Route path="/dashboard">
          <Page3 />
        </Route>
      </Switch>
    </div>
  </Router>

    // <Switch>
    //   <Route exact path="/page1">
    //     <Page1 />
    //   </Route>
    //   <Route path="/page2">
    //     <Page2 />
    //   </Route>
    //   <Route path="page3">
    //     <Page3 />
    //   </Route>
    // </Switch>
  
);

  return (
    <div></div>
    // <div className="form">
      
    //   <ul className="tab-group">
    //     <Tab class='tab' link='#signup' buttonName='Sign Up'></Tab>
    //     <Tab class='tab' link='#login' buttonName='Log In'></Tab>
    //   </ul>
      
      // <div className="tab-content">
        // <SignUp></SignUp>

      //   <SignIn></SignIn>
               
      // </div>      
    // </div>
      // <form>
      //     <Todo></Todo>
      // </form>
  );
}

export default App;
