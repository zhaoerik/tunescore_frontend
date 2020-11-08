import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const USER_URL = "http://localhost:3000/users/"

const Profile = (props) => {

    const [userApi, setUserApi] = useState();

    useEffect(() => {
        async function getUserData() {
            fetch(USER_URL)
                .then(res => res.json())
                .then(userData => 
                    setUserApi(userData))
                .catch(console.log)
        }
        getUserData()
    }, [])

    // useEffect(() => {
    //     console.log(userApi)
    //     const targetUser = userApi && userApi.filter((users) => users.id === props.user.id) 
    //     setUser(targetUser)
    // }, [userApi])

    const renderReviews = () => {
        let userReviews = props.reviews.filter(review => review.user.id === props.user.id)

        if (props.user.reviews) {
            return userReviews.map(rev =>
                <>
                    <li key={rev.id}>
                        {/* <NavLink to={`/albums/${}`}> */}
                        <img alt={rev.album.name} src={rev.album.image} />
                        {/* </NavLink> */}
                    </li>
                    <p>
                        <b>{rev.album.name}</b>
                        <br></br>
                    Popularity: {rev.album.popularity}
                        <br></br>
                        <br></br>
                    Review: {rev.description}
                        <br></br>
                    User Rating: {rev.rating}
                    </p>
                </>
            )
        } else {
            return (
                <h2>You have no reviews!</h2>
            )
        }
    }

    const renderUserInfo = () => {
        let user = userApi ? userApi.filter((users) => users.id === props.user.id)[0] : props.user
        return (
            user ? 
                <div key={user.id}>
                    <img alt="" src={user.image} />
                    <h2>{user.username}</h2>
                    <h4>{user.name}</h4>
                    <h4>{user.email}</h4>
                    <h4>{user.badge}</h4>
                    {renderReviews()}
                </div>
                :
                <Redirect to='/login' />
        )
    }

    return (
        renderUserInfo()
    )

}

export default Profile;

