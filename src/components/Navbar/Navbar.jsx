import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item + ' ' + s.friends}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                <div className={s.friendsImges}>
                    <div className={s.friendImg}></div>
                    <div className={s.friendImg}></div>
                    <div className={s.friendImg}></div>
                </div>
            </div>
            <div className={s.item + ' ' + s.settings}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            
        </nav>
    )
}

export default Navbar;