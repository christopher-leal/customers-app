import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import CustomerList from "./../components/CustomerList";
import CustomersActions from "../components/CustomersActions";
import { fetchCustomers } from "./../actions/fetchCustomers";

const customers = [
  { dni: "2700000", name: "Juan Perez", age: 37 },
  { dni: "3000000", name: "Otto", age: 17 },
  { dni: "3330000", name: "Luis", age: 32 }
];
class CustomerContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  renderBody = customers => {
    return (
      <div>
        <CustomerList customers={customers} urlPath={"/customers/"} />
        <CustomersActions>
          <button onClick={this.handleAddNew}>Nuevo cliente</button>
        </CustomersActions>
      </div>
    );
  };
  handleAddNew = () => {
    this.props.history.push("/customers/new");
  };
  render() {
    return (
      <div>
        <AppFrame
          header={"Listado de clientes"}
          body={this.renderBody(customers)}
        />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchCustomers: () => dispatch(fetchCustomers())
});
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CustomerContainer)
);
