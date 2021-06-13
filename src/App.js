import "./App.css";
import Home from "./pages/index"; // or remove index because it will auto. look for index.js
import SigninPage from "./pages/signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
