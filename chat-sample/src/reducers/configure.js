import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import penderMiddleware from "redux-pender";
import modules from "./modules";
import createSagaMiddleware from "redux-saga";

const configure = () => {
    const middleware = applyMiddleware(createLogger(), ReduxThunk, penderMiddleware());
    const store = createStore(modules, composeWithDevTools(middleware));
    return store;
};

export default configure;
