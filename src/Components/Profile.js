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

        if (userReviews) {
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
        } else if (userReviews === 0){
            return (
                <UserReviews>
                    <h2>You have no reviews!</h2>
                </UserReviews>
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
                        <UserName>{user.username}</UserName>
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.badge}</h3>
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
    height: 200px;
    width: 200px;
    margin-top: 6%;
    margin-left: 801px;
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

const UserName = styled.h1`
    font-size: 40px;
`