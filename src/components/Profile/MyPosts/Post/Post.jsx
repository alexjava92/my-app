import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return <div className={s.item}>
        <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt="картинка" />
        {props.message}
        <div><span>like</span> {props.likesCount}</div>



    </div>
}

export default Post;