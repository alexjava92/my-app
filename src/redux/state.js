import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you?', likesCount: 12},
            {id: 2, message: 'it`s my first post', likesCount: 2}
        ],
        newPostText: 'new post text'

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
    }
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}
export default state;