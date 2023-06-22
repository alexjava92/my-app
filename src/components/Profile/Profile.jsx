import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileiInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;