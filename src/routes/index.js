import { Route, Switch } from "react-router";
import Login from "../pages/login";
import Signup from "../pages/signup";

function Routes({ theme }) {
  return (
    <Switch>
      <Route exact path="/">
        <Login theme={theme} />
      </Route>
      <Route path="/signup">
        <Signup theme={theme} />
      </Route>
    </Switch>
  );
}
export default Routes;
