import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom"

const Nav = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" className={({isActive}) => (isActive ? s.active : s.link) }>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialog" className={({isActive}) => (isActive ? s.active : s.link) }>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={({isActive}) => (isActive ? s.active : s.link) }>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={({isActive}) => (isActive ? s.active : s.link) }>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/setings" className={({isActive}) => (isActive ? s.active : s.link) }>Setings</NavLink>
        </div>
    </nav>
}

export default Nav;