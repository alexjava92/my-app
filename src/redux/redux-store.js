import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
});

const store = legacy_createStore(reducers);

export default store;

