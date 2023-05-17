import {combineReducers, legacy_createStore as createStore} from "redux";

import profileReducer from "./profilereducer";
import dialogsReducer from "./dialogsreducer";
import sidebarReducer from "./sidebarreducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);
export default store


