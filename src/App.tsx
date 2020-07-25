import React from "react";
import Navigation from "./layouts/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShipmentState from "./context/ShipmentState";

function App() {
  return (
    <ShipmentState>
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Brands" />
          <Route exact path="/Transporters" />
          <Route exact path="/Profile" />
        </Switch>
      </main>
    </Router>
    </ShipmentState>
  );
}

export default App;
