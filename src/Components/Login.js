import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom'

const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userFound, setUserFound] = useState(false)

    const changeHandle = e => {
        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }
    
    const submitHandle = e => {
        e.preventDefault();
        // console.log(props)
        let loginUser = props.users.find(user => user.username === username && user.password === password)
        // console.log(loginUser)
        if (loginUser) {
            props.login(loginUser)
            setUserFound(!userFound)
            // console.log(props)
        } else {
            alert("Incorrect Username or Password. Please try again.")
            setUsername("")
            setPassword("")
        }
    }
    return (
        userFound ?
            <Redirect to='/profile' />
            :
            <>
                <form onSubmit={submitHandle} >
                    <input type='text' placeholder='Username' name="username" value={username} onChange={changeHandle}></input>
                    <br></br><br></br>
                    <input type='password' placeholder='Password' name="password" value={password} onChange={changeHandle}></input>
                    <br></br><br></br>
                    <button type='submit'>Log In</button>
                    <h3>New to the App? <NavLink to='/signup'>Sign Up Now!</NavLink></h3>
                </form>
            </>
    )
}

export default Login;