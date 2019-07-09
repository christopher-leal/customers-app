import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CustomerContainer from "./containers/CustomerContainer";

function App() {
  const renderHome = () => (
    <div>
      <HomeContainer />
    </div>
  );
  const renderCustomerContainer = () => (
    <div>
      <CustomerContainer />
    </div>
  );
  const renderCustomerNewContainer = () => <div />;
  return (
    <Router>
      <div>
        <Route exact path="/" component={renderHome} />
        <Route exact path="/customers" component={renderCustomerContainer} />
        <Switch>
          <Route path="/customers/new" component={renderCustomerNewContainer} />
          <Route
            path="/customers/:dni"
            component={() => <h1>Customer dni</h1>}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
