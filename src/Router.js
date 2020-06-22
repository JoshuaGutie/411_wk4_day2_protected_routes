import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// import home from './components/Home'
// import about from './components/About'
// import car from './components/Car'
// import login from './components/Login'

// Write checkAuth function here
const checkAuth = () => {
  // Check the cookies for a cookie called "loggedIn"
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path="/about" component={About} />
      <ProtectedRoute path="/car/:id" component={Car} />
    </Switch>
  );
};

export default Router;
