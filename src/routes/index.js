import { useState } from "react";
import { Route, Switch } from "react-router";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Signup from "../pages/signup";

function Routes() {
  const [auth, setAuth] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/signup">
        <Signup auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/dashboard">
        <Dashboard auth={auth} setAuth={setAuth} />
      </Route>
    </Switch>
  );
}
export default Routes;
