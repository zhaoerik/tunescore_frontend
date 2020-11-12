import React, { useState } from 'react';
import styled from 'styled-components'

const background = "https://media0.giphy.com/media/lmjzmEcZLkcMLtVrWi/giphy.gif"
const logo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a32f693c-bcf5-4c71-8858-7be1aaf0867e/d6189x3-fb8eb1fd-d417-4ab1-bd30-5baff35ae933.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTMyZjY5M2MtYmNmNS00YzcxLTg4NTgtN2JlMWFhZjA4NjdlXC9kNjE4OXgzLWZiOGViMWZkLWQ0MTctNGFiMS1iZDMwLTViYWZmMzVhZTkzMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._2jr9E4odr5xyaRuyUYXScuNcgQ7xcKnLsYh5fZekVU"

const Signup = (props) => {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [confirm, setConfirm] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")

    const changeHandle = e => {
        if (e.target.name === "username") {
            setUser(e.target.value)
        } else if (e.target.name === "password") {
            setPass(e.target.value)
        } else if (e.target.name === "confirm") {
            setConfirm(e.target.value)
        } else if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "image") {
            setImage(e.target.value)
        }
    }

    const submitHandle = e => {
        e.preventDefault();

        if (pass === confirm) {
            let userInfo = {
                name: name,
                username: user,
                password: pass,
                email: email,
                image: image
            }
            // console.log(userInfo)
            // console.log(props)
            props.newUser(userInfo)
        } else {
            alert("Passwords do not match. Please try again!")
            setUser('')
            setPass('')
            setConfirm('')
            setName('')
            setEmail('')
            setImage('')
        }

    }

    return (
        <>
            <Background alt="" src={background} />
            <Form onSubmit={submitHandle} >
                <h1>Sign Up</h1>
                <h3>Don't worry, it's super quick</h3>
                <p><Input type="text" name="username" placeholder="Username" value={user} onChange={changeHandle} /></p>
                <p><Input type="password" name="password" placeholder="Password" value={pass} onChange={changeHandle} /></p>
                <p><Input type="password" name="confirm" placeholder="Confirm" value={confirm} onChange={changeHandle} /></p>
                <p><Input type="text" name="name" placeholder="Full Name" value={name} onChange={changeHandle} /></p>
                <p><Input type="text" name="email" placeholder="Email Address" value={email} onChange={changeHandle} /></p>
                <p><Input type="text" name="image" placeholder="Profile Picture" value={image} onChange={changeHandle} /></p>
                <Button><b>Sign Up</b></Button>
            </Form>
        </>
    )
}

export default Signup;

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