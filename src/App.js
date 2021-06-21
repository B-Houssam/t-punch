import "./App.css";
import Home from "./pages/index"; // or remove index because it will auto. look for index.js
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </Router>
  );
}

export default App;
