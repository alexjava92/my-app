import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileiInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return <div>
        <ProfileInfo />
        <MyPostsContainer/>
    </div>
}

export default Profile;