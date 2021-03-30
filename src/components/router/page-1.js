import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
function Page1() {
    let page1 = useRouteMatch("/");

    return    <p>Page 1</p>
}

// const match = useRouteMatch({
//     path: "/BLOG/:slug/",
//     strict: true,
//     sensitive: true
//   });
  
// const Input = props => 
//     Page1

//<input />

export default Page1;

