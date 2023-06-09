import React, {useEffect} from "react";
import Profile from "./Profile";

import {connect} from "react-redux";
import {getUsersProfile} from "../../redux/profilereducer";
import {Navigate, useParams} from "react-router-dom";


function ProfileContainer(props) {

    const { userId } = useParams();
    let currUserId = userId||2



    useEffect(() => {
        props.getUsersProfile(currUserId);
    }, );
    if (!props.isAuth) return <Navigate to={"/login"}/>;
    return (

        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getUsersProfile })(ProfileContainer);