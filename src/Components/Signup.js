import React, { useState } from 'react';

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
            <form onSubmit={submitHandle} >
                <h1>Sign Up</h1>
                <h3>Don't worry, it's super quick</h3>
                <p><input type="text" name="username" placeholder="Username" value={user} onChange={changeHandle} /></p>
                <p><input type="password" name="password" placeholder="Password" value={pass} onChange={changeHandle} /></p>
                <p><input type="password" name="confirm" placeholder="Confirm" value={confirm} onChange={changeHandle} /></p>
                <p><input type="text" name="name" placeholder="Full Name" value={name} onChange={changeHandle} /></p>
                <p><input type="text" name="email" placeholder="Email Address" value={email} onChange={changeHandle} /></p>
                <p><input type="text" name="image" placeholder="Profile Picture" value={image} onChange={changeHandle} /></p>
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default Signup;