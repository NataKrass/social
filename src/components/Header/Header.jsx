import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg'></img>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;