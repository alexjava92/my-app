import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you?', likesCount: 12},
                {id: 2, message: 'it`s my first post', likesCount: 2}
            ],
            newPostText: 'new post text yo yo yo'

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'they pool'},
                {id: 3, message: 'Автосервис'},
                {id: 4, message: 'messages fuck'},
                {id: 5, message: 'epam'}
            ],
            dialogs: [
                {id: 1, name: 'Pivkof'},
                {id: 2, name: 'AutoExpert'},
                {id: 3, name: 'Автосервис'},
                {id: 4, name: 'Алексей'},
                {id: 5, name: 'Успех'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель observer
    },

    dispatch(action) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

            this._callSubscriber(this._state);
        }

}

export default store;
window.store = store;