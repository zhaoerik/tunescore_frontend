import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

    const logoutHandle = () => {
        props.logout("");
    }

    return (
        <div>
            {props.user ?
                <>
                    <NavLink to='/profile'>
                        <li>Profile</li>
                    </NavLink>
                    <NavLink to='/albums'>
                        <li>Albums</li>
                    </NavLink>
                    <NavLink to='/login' onClick={logoutHandle}>
                        <li>Log Out</li>
                    </NavLink>
                </>
                :
                <>
                    <NavLink to='/albums'>
                        <li>Albums</li>
                    </NavLink>
                    <NavLink to='/login' onClick={logoutHandle}>
                        <li>Log In</li>
                    </NavLink>
                </>
            }
        </div>
    )
}

export default NavBar