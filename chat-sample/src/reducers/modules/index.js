import { combineReducers } from "redux";

import chat from "./chat";
import loginReducer from "./loginReducer";
import menuReducer from "./menuReducer";

export default combineReducers({
    chat,
    loginReducer,
    menuReducer,
});