import React from "react";
import s from "./ProfileInfo.module.css"



const ProfileInfo = () => {
    return <div className={s.photo}>
        <img alt={""} src='https://www.seocom.ru/images/nasha-analitika/zagolovok/1500x500.jpg' />
        <div className={s.descriptionBlock}>
            Ava + Descriptions
        </div>
    </div>
}

export default ProfileInfo;