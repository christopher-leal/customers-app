import { FETCH_CUSTOMERS } from "./../constants/index";
import { createAction } from "redux-actions";

export const fetchCustomers = createAction(FETCH_CUSTOMERS);
