import "./App.css";
import Home from "./pages/index"; // or remove index because it will auto. look for index.js
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import DashMain from "./pages/dashmain";
import DashD from "./pages/dashdata";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/dashboard/main" component={DashMain} exact />
        <Route path="/dashboard/datasets" component={DashD} exact />
      </Switch>
    </Router>
  );
}

export default App;
