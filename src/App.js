import "./App.css";
import Home from "./pages/index"; // or remove index because it will auto. look for index.js
//import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import DashMain from "./pages/dashmain";
import DashD from "./pages/dashdata";
import DashA from "./pages/dashaccount";
import DashE from "./pages/dashexplore";
import DashN from "./pages/newanalysis";
import DashH from "./pages/dashhistory";
import DashMessages from "./pages/dashmessages";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  const GuardRoute = ({ component: Component, ...props }) => (
    <Route
      {...props}
      render={(routeProps) => {
        const item = localStorage.getItem("token");

        // Do all your conditional tests here
        return item !== null ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    />
  );

  const ReverseGuardRoute = ({ component: Component, ...props }) => (
    <Route
      {...props}
      render={(routeProps) => {
        const item = localStorage.getItem("token");

        // Do all your conditional tests here
        return item !== null ? (
          <Redirect to="/datasets" />
        ) : (
          <Component {...routeProps} />
        );
      }}
    />
  );

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <ReverseGuardRoute path="/signin" component={SignupPage} exact />
        <Route path="/main" component={DashMain} exact />
        <Route path="/datasets" component={DashD} exact />
        <Route path="/account" component={DashA} exact />
        <Route path="/explore" component={DashE} exact />
        <Route path="/messages" component={DashMessages} exact />
        <Route path="/newanalysis" component={DashN} exact />
        <Route path="/history" component={DashH} exact />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
