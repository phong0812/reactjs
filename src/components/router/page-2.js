import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

function Page2() {
    let page2 = useRouteMatch("/");

    return    <p>Page 2</p>
}

export default Page2;

