import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";

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

const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor={name}>{label} </label>
    <input {...input} type={!type ? "text" : type} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
  return (
    <div>
      <h2>Edicion del cliente</h2>
      <form onSubmit={handleSubmit}>
        <Field name="name" component={MyField} label="Nombre:" />
        <Field
          name="dni"
          component={MyField}
          validate={[isNumber]}
          label="DNI:"
        />
        <Field
          name="age"
          component={MyField}
          type="number"
          validate={[isNumber]}
          label="Edad:"
        />
        <CustomersActions>
          <button type="submit" disabled={submitting}>
            Aceptar
          </button>
          <button onClick={onBack}>Cancelar</button>
        </CustomersActions>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit", validate })(
  CustomerEdit
);
export default setPropsAsInitial(CustomerEditForm);
