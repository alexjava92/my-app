import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {


    let postElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div >
            <button className={s.button} onClick={onAddPost}>Написать</button>
        </div>

        <div>
            {postElements}
        </div>
    </div>
}

export default MyPosts;