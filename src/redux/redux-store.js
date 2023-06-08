import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";

import profileReducer from "./profilereducer";
import dialogsReducer from "./dialogsreducer";
import sidebarReducer from "./sidebarreducer";
import usersReducer from "./usersreducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store


