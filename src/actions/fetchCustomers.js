import { FETCH_CUSTOMERS } from "./../constants/index";
import { createAction } from "redux-actions";

const customers = [
  { dni: "2700000", name: "Juan Perez", age: 37 },
  { dni: "3000000", name: "Otto", age: 17 },
  { dni: "3330000", name: "Luis", age: 32 }
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);
