import { combineReducers } from "redux";
import loginData from "./reducers/loginData";

export const rootReducer = combineReducers({
  loginData,
});
