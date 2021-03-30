import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

function Page3() {
    let page3 = useRouteMatch("/");

    return    <p>Page 3</p>
}

export default Page3;

