import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileiInfo.jsx";


const Profile = (props) => {

    return <div>
        <ProfileInfo />

        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
        />
    </div>
}

export default Profile;