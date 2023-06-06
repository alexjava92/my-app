import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profilereducer";
import { useParams } from "react-router-dom";

function ProfileContainer(props) {

    const { userId } = useParams();
    let currUserId = userId||2

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserId)
            .then((response) => {
                props.setUsersProfile(response.data);
            });
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

export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);