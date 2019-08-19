import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";
import { Prompt } from "react-router-dom";
import { accessControl } from "./../helpers/accessControl";
import { CUSTOMER_EDIT } from "../constants/permissions";

// const isRequired = value => !value && "Este campo es requerido";

const isNumber = value =>
  isNaN(Number(value)) && "Este campo debe ser numerico";

const validate = values => {
  const error = {};
  if (!values.name) {
    error.name = "El campo nombre es requerido";
  }
  if (!values.dni) {
    error.dni = "El DNI es un campo requerido";
  }
  return error;
};

const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const toNumber = value => value && Number(value);
const onlyGrow = (value, prev, values) =>
  value && (!prev ? value : value > prev ? value : prev);

class CustomerEdit extends Component {
  componentDidMount() {
    if (this.txt) {
      this.txt.focus();
    }
  }
  renderField = ({ input, meta, type, label, name, withFocus }) => (
    <div>
      <label htmlFor={name}>{label} </label>
      <input
        {...input}
        type={!type ? "text" : type}
        ref={withFocus && (txt => (this.txt = txt))}
      />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );

  render() {
    const {
      handleSubmit,
      submitting,
      onBack,
      pristine,
      submitSucceeded
    } = this.props;
    return (
      <div>
        <h2>Edicion del cliente</h2>
        <form onSubmit={handleSubmit}>
          <Field
            withFocus
            name="name"
            component={this.renderField}
            label="Nombre:"
            parse={toUpper}
            format={toLower}
          />
          <Field
            name="dni"
            component={this.renderField}
            validate={[isNumber]}
            label="DNI:"
          />
          <Field
            name="age"
            component={this.renderField}
            type="number"
            validate={[isNumber]}
            label="Edad:"
            parse={toNumber}
            normalize={onlyGrow}
          />
          <CustomersActions>
            <button type="submit" disabled={pristine || submitting}>
              Aceptar
            </button>
            <button type="button" onClick={onBack} disabled={submitting}>
              Cancelar
            </button>
          </CustomersActions>
          <Prompt
            when={!pristine && !submitSucceeded}
            message="Se perderan los datos si continua"
          />
        </form>
      </div>
    );
  }
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit", validate })(
  CustomerEdit
);
export default accessControl([CUSTOMER_EDIT])(
  setPropsAsInitial(CustomerEditForm)
);
