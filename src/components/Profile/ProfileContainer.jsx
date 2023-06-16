import React, {useEffect} from "react";
import Profile from "./Profile";

import {connect} from "react-redux";
import {getUsersProfile} from "../../redux/profilereducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


function ProfileContainer(props) {

    const { userId } = useParams();
    let currUserId = userId||2



    useEffect(() => {
        props.getUsersProfile(currUserId);
    }, );
    return (

        <div>
            <Profile profile={props.profile} />
        </div>
    );
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

});

export default compose(
    connect(mapStateToProps, { getUsersProfile }),
    withAuthRedirect
)
(ProfileContainer);