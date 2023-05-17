const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;