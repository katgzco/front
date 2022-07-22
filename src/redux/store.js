import { createStore, compose, applyMiddleware } from "redux";
import { initialState } from "./initialState";
import { rootReducer } from "./root-reducer";

const middleware = [];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
);

export default store;

