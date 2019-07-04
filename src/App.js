import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/customers" component={() => <h1>Customers</h1>} />
        <Switch>
          <Route exact path="/customers/new" component={() => <h1>New</h1>} />
          <Route
            exact
            path="/customers/:dni"
            component={() => <h1>Customer dni</h1>}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
