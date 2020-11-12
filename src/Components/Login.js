import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const background = "https://media0.giphy.com/media/lmjzmEcZLkcMLtVrWi/giphy.gif"
const logo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a32f693c-bcf5-4c71-8858-7be1aaf0867e/d6189x3-fb8eb1fd-d417-4ab1-bd30-5baff35ae933.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTMyZjY5M2MtYmNmNS00YzcxLTg4NTgtN2JlMWFhZjA4NjdlXC9kNjE4OXgzLWZiOGViMWZkLWQ0MTctNGFiMS1iZDMwLTViYWZmMzVhZTkzMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._2jr9E4odr5xyaRuyUYXScuNcgQ7xcKnLsYh5fZekVU"

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
                <Background alt="" src={background} />
                <Form onSubmit={submitHandle} >
                    <h1>Sign In</h1>
                    <Input type='text' placeholder='Username' name="username" value={username} onChange={changeHandle}></Input>
                    <br></br><br></br>
                    <Input type='password' placeholder='Password' name="password" value={password} onChange={changeHandle}></Input>
                    <br></br><br></br>
                    <Button type='submit'><b>Log In</b></Button>
                    <h3>New to the App? <SignUpLink to='/signup'>Sign Up Now!</SignUpLink></h3>
                </Form>
            </>
    )
}

export default Login;

const Name = styled.h1`
    left: 7%;
    position: absolute;
    color: white;
`

const Logo = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    top: 2%;
    left: 2%;
    border-radius: 10px;
`

const Background = styled.img`
    filter: brightness(50%);
    width: 110%;
    height: 105%;
    z-index: -1;
    position: absolute;
    top: -13px;
`

const Form = styled.form`
    top: 45%;
    left: 50%;
    position: absolute;
    margin: auto;
    width: 30%;
    color: white;
    background-color: #00000094;
    border-radius: 5px;
    text-align: center;
    transform: translate(-50%, -50%);
    padding: 3%;
`

const Input = styled.input`
    width: 70%;
    font-family: 'Montserrat',sans-serif;
    font-size: 16px;
    padding: 3%;
`

const Button = styled.button`
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    min-width: 100px;
    min-height: 40px;
    background-color: #0b40ff;
    color: white;
    border-radius: 5px;
    border: 0px;
`

const SignUpLink = styled(NavLink)`
    color: #8c55ef;
`