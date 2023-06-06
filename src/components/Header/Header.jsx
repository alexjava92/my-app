import React from "react";
import s from './Header.module.css';

import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img className={s.img} alt={""} src='https://banner2.cleanpng.com/20180615/kob/kisspng-technical-support-email-address-message-transfer-a-core-5b236d197efbe5.3668986615290483455201.jpg'></img>

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
             : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header;