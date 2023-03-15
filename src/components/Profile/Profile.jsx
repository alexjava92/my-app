import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileiInfo.jsx";

const Profile = (props) => {

    return <div>
        <ProfileInfo />

        <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>
}

export default Profile;