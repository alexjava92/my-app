const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you?', likesCount: 12},
                {id: 2, message: 'it`s my first post', likesCount: 2}
            ],
            newPostText: 'new post text yo yo yo'

        },
        messagesPage: {
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
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE){
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: ADD_POST})
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default store;

window.store = store;