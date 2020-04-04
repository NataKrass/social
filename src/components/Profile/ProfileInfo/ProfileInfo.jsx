import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='http://f-cover.com.ua/upload/resize_cache/iblock/db3/702_500_1/db3e10208d2137e01efc0c03492add44.jpg'></img>
            </div>
            <div className={s.ava}>
                <img src='https://i.pinimg.com/736x/2d/dc/25/2ddc25914e2ae0db5311ffa41781dda1.jpg'></img>
                <div>Descriptions</div>
            </div>
        </div>
    )
}

export default ProfileInfo;