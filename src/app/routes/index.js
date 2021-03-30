import { render } from "@testing-library/react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import SignIn from "../../components/form/sign-in";
import SignUp from "../../components/form/sign-up";
import Page1 from '../../components/router/page-1';
import Page2 from '../../components/router/page-2';
import Page3 from '../../components/router/page-3';


const Routes = () => 
        <Switch>
            <Route exact path="/">
                <Page1 />
            </Route>
            <Route path="/about">
                <Page2 />
            </Route>
            <Route path="/dashboard">
                <Page3 />
            </Route>
            <Route path="/signup">
                <SignUp></SignUp>
            </Route>
            <Route path="/signin">
                <SignIn></SignIn>
            </Route>
            <Route>Not Found</Route>
        </Switch>

export default Routes;
  
