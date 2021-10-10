import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter } from '@material-ui/icons';
import { Chat } from '@material-ui/icons';
import { Notifications } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

                <div className="header__search">   
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={Chat} title="Chats" />
                <HeaderOption Icon={Notifications} title="Notifications" />
                <HeaderOption onClick={logoutOfApp} title="me"/>
            </div>
        </div>
    )
}

export default Header
