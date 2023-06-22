import React, {useEffect} from "react";
import Profile from "./Profile";

import {connect} from "react-redux";
import {getStatus, getUsersProfile, updateStatus} from "../../redux/profilereducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


function ProfileContainer(props) {

    const { userId } = useParams();
    let currUserId = userId||29233

    useEffect(() => {
        props.getUsersProfile(currUserId);
        props.getStatus(currUserId);
    }, [currUserId]);

    return (

        <div>
            <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
    //withAuthRedirect
)
(ProfileContainer);