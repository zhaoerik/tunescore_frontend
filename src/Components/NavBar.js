import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LoginLogo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a32f693c-bcf5-4c71-8858-7be1aaf0867e/d6189x3-fb8eb1fd-d417-4ab1-bd30-5baff35ae933.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTMyZjY5M2MtYmNmNS00YzcxLTg4NTgtN2JlMWFhZjA4NjdlXC9kNjE4OXgzLWZiOGViMWZkLWQ0MTctNGFiMS1iZDMwLTViYWZmMzVhZTkzMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._2jr9E4odr5xyaRuyUYXScuNcgQ7xcKnLsYh5fZekVU"

const SignedInLogo = "https://i.pinimg.com/originals/2a/24/28/2a2428415a8c8e8cbeac6025965d7b20.png"


const NavBar = (props) => {

    const logoutHandle = () => {
        props.logout("");
    }

    return (
        <>
            {props.user ?
                <Nav>
                    <Link to='/albums'>
                        <Li>
                            <Logo alt="" src={SignedInLogo} />
                            <Name>Tunescore</Name>
                        </Li>
                    </Link>
                    <Link to='/login' onClick={logoutHandle}>
                        <Li><b>Log Out</b></Li>
                    </Link>
                    <Link to='/lyricgame'>
                        <Li><b>Lyric Game</b></Li>
                    </Link>
                    <Link to='/profile'>
                        <Li><b>Profile</b></Li>
                    </Link>
                </Nav>
                :
                <NavLink to='/login'>
                    <div>
                        <Logo alt="" src={LoginLogo} />
                        <NameLogin>Tunescore</NameLogin>
                    </div>
                </NavLink>
            }
        </>
    )
}

export default NavBar

const Link = styled(NavLink)`
    color: white; 
    text-decoration: none;  

    &:hover {
        text-decoration: none;
        color: #F74978;
    }
`

const Nav = styled.div`
    overflow: hidden;
    position: fixed;
    width: 100%;
    padding: 1%;
    background-color: white;
`

const NameLogin = styled.h1`
    left: 7%;
    top: 2%;
    position: absolute;
    color: white;
`

const Name = styled.h1`
    left: 7%;
    top: 2%;
    position: absolute;
    color: black;
`

const Logo = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    top: 2%;
    left: 2%;
    border-radius: 10px;
`

const Li = styled.li`
    display: inline;
    margin-right: 0px;
    margin-top: 15px;
    margin-left: 50px;
    color: black;
    text-align: center;
    text-decoration: none;
    float: right;
    position: static;
    padding: 2px;
`