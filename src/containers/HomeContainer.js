import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomersActions from "./../components/CustomersActions";
import AppFrame from "./../components/AppFrame";

class HomeContainer extends Component {
  handleOnClick = () => {
    console.log("hola");
  };
  render() {
    return (
      <div>
        <AppFrame
          header="Home"
          body={
            <div>
              Esta es la pantalla inicial
              <CustomersActions>
                <button onClick={this.handleOnClick}>
                  Listado de clientes
                </button>
              </CustomersActions>
            </div>
          }
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {};

export default HomeContainer;
