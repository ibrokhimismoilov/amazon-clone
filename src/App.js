import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="Ibrokhim_uz-amazon-e_commers">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
