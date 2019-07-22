import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";
import CustomerContainer from "./containers/CustomerContainer";

function App() {
  const renderHome = () => (
    <div>
      <HomeContainer />
    </div>
  );
  const renderCustomersContainer = () => (
    <div>
      <CustomersContainer />
    </div>
  );
  const renderCustomerNewContainer = () => <div />;
  return (
    <Router>
      <div>
        <Route exact path="/prueba" component={renderHome} />
        <Route exact path="/" component={renderHome} />
        <Route exact path="/customers" component={renderCustomersContainer} />
        <Switch>
          <Route path="/customers/new" component={renderCustomerNewContainer} />
          <Route
            path="/customers/:dni"
            render={props => <CustomerContainer dni={props.match.params.dni} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
