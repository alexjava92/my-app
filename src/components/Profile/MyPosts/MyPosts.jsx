import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
            <button onClick={addPost}>Написать</button>
        </div>

        <div>
            {postElements}
        </div>
    </div>
}

export default MyPosts;