import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import styled from 'styled-components'

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


    const renderReviews = () => {
        let userReviews = props.reviews.filter(review => review.user.id === props.user.id)

        if (props.user.reviews) {
            return userReviews.map(rev =>
                <UserReviews>
                    <ul key={rev.id}>
                        <AlbumImage alt={rev.album.name} src={rev.album.image} />
                    </ul>
                    <ReviewInformation>
                        <b>{rev.album.name}</b>
                        <br></br>
                        <em>Popularity: {rev.album.popularity}</em>
                        <br></br>
                        <br></br>
                    Review: {rev.description}
                        <br></br>
                        <br></br>
                    User Rating: {rev.rating}
                    </ReviewInformation>
                </UserReviews>
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
                    <UserImage alt="" src={user.image} />
                    <UserInfo>
                        <br />
                        <h2>{user.username}</h2>
                        <h4>{user.name}</h4>
                        <h4>{user.email}</h4>
                        <h4>{user.badge}</h4>
                        <br />
                    </UserInfo>
                    <ReviewHeader>My Reviews</ReviewHeader>
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

const UserImage = styled.img`
    height: 543px;
    width: 360px;
    margin-top: 6%;
    margin-left: 40%;
    display: flex;
`

const UserInfo = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    top: 59%;
    text-align: center;
`

const AlbumImage = styled.img`
    height: 150px;
    width: 150px;
`

const ReviewHeader = styled.h1`
    display: flex;
    top: 81%;
    right: 40%;
    place-content: center;
    margin-bottom: 3%;
`

const UserReviews = styled.div`
    display: flex;
    flexDirection: row;
`

const ReviewInformation = styled.p`
    margin-left: 2%;
    margin-top: 1.5%;
`