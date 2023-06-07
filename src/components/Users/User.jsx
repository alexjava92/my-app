import React from "react";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";


let User = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    console.log(props.onPageChanged)
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>

        {props.users.map(u => <div key={u.id}>
                <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                        <img alt={'user'}
                             src={u.photos.large != null ? u.photos.large : "http://тейково-район.рф/tinybrowser/images/__2018/kdntmrkr.png"}
                             className={styles.userPhoto}/>
                </NavLink>
            </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {withCredentials: true,
                                    headers: {
                                        "API-KEY": "00c24f1d-a625-483f-8a89-0e5f78771e42"
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        props.unfollow(u.id)
                                    }
                                });
                        }}>Unfollow</button> : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {withCredentials: true,
                                    headers: {
                                        "API-KEY": "00c24f1d-a625-483f-8a89-0e5f78771e42"
                                    }})
                                .then(response => {
                                   if (response.data.resultCode === 0){
                                       props.follow(u.id)
                                    }
                                });



                        }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span><div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
        </div>)}
    </div>
}

export default User;