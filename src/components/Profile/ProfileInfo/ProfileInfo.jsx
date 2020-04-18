import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <div>null</div>
    }
    console.log(props.profile);
    return (
        <div>
            <div>
                <img src='http://f-cover.com.ua/upload/resize_cache/iblock/db3/702_500_1/db3e10208d2137e01efc0c03492add44.jpg'></img>
            </div>
            <div className={s.ava}>
                <img src={props.profile.photos.large}></img>
            </div>
            <div className={s.text}>Status: {props.profile.aboutMe}</div>
             <div>{props.profile.lookingForAJob}</div>
            <div>Full Name: {props.profile.fullName}</div>
        </div>
    )
}

export default ProfileInfo;