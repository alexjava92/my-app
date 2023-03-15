import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = "";
    }

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <textarea ref={newPostElement}>Что нового?</textarea>
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