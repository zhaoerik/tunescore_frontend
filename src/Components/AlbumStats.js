import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components'

const REVIEW_URL = "http://localhost:3000/reviews"

const AlbumStats = (props) => {

    const [description, setDescription] = useState("");
    const [rating, setRating] = useState('');
    const [reviewApi, setReviewApi] = useState([]);
    const [addReview, setAddReview] = useState(false);
    const [deletedReview, setDeletedReview] = useState(false);

    useEffect(() => {
        props.setSearch("")
    })

    useEffect(() => {
        async function getReviews() {
            fetch(REVIEW_URL)
                .then(res => res.json())
                .then(reviewData => setReviewApi(reviewData))
                .catch(console.log)
        }
        getReviews()
    }, [])

    useEffect(() => {
        async function getReviews() {
            fetch(REVIEW_URL)
                .then(res => res.json())
                .then(reviewData => setReviewApi(reviewData))
                .catch(console.log)
        }
        getReviews()
    }, [addReview, deletedReview])

    useEffect(() => {
        if (addReview) {
            setAddReview(false);
        }
    }, [reviewApi])

    useEffect(() => {
        if (deletedReview) {
            setDeletedReview(false)
        }
    }, [reviewApi])

    const changeHandle = e => {
        if (e.target.name === "description") {
            setDescription(e.target.value)
            // console.log(e.target.value)
        } else if (e.target.name === "rating") {
            setRating(e.target.value)
            // console.log(e.target.value)
        }
    }

    const submitHandle = e => {
        e.preventDefault()
        let userReviews = reviewApi.filter(review => review.user.id === props.user.id)
        let userAlbumReviews = userReviews.filter(review => review.album.name === props.album.name)
        //console.log(userReviews)
        // props.newReview(props.album, props.user, description, rating)
        // setDescription("");
        // setRating("");
        if (userAlbumReviews.length === 0) {
            props.newReview(props.album, props.user, description, rating)
            setDescription("");
            setRating("");
            setAddReview(true);
        } else {
            alert('You have already submitted a review!')
        }
    }

    const handleDelete = reviewId => {
        props.deleteReview(reviewId)
        setDeletedReview(true)
    }

    const explicit = (explicitTrack) => {
        if (explicitTrack === "t") {
            return ("Explicit")
        } else {
            return ("")
        }
    }

    const renderTracks = () => {
        return props.album.tracks.map(track =>
            // <ol key={track.id}>
            <table>
                <tr key={track.id}>
                    <td><b>{track.name}</b></td>
                    <td>{track.popularity}</td>
                    <td>{explicit(track.explicit)}</td>
                </tr>
            </table>
            // <b>{track.name}</b>  Popularity: {track.popularity} Explicit: {explicit(track.explicit)}
            // <br></br> 
            // </ol>
        )
    }

    let reviewIds = props.album.reviews.map(review => review.id)
    let userReviewId = props.user.reviews.map(review => review.id)

    const otherReviews = () => {
        const albumReviews = reviewApi.filter(review => review.album.name === props.album.name)
        const nonUserReviews = albumReviews.filter(review => review.user.id !== props.user.id)
        return nonUserReviews.map(review =>
            <UsersInfo>
                <ol key={review.id}>
                    <UserImage alt="" src={review.user.image} />
                    <h3>{review.user.name}</h3>
                    <BadgeDiv>
                        <h4>{review.user.badge}</h4>
                    </BadgeDiv>
                    <br />
                    <UsersReviews>
                        Rating: {review.rating}
                        <br></br>
                    Review: {review.description}
                    </UsersReviews>
                    <br />
                </ol>
            </UsersInfo>
        )
    }

    const userReview = () => {
        const albumReviews = reviewApi.filter(review => review.album.name === props.album.name)
        const userReview = albumReviews.filter(review => review.user.id === props.user.id)

        const reviewId = userReview[0]?.id;
        return (
            userReview.map(review =>
                <UsersInfo>
                    <User key={review.id}>
                        <UserImage alt="" src={review.user.image} />
                        <h3>{review.user.name}</h3>
                        <OwnBadgeDiv>
                            <h4>{review.user.badge}</h4>
                        </OwnBadgeDiv>
                    </User>
                        <OwnReview>
                            Your Rating: {review.rating}
                            <br></br>
                            Your Review: {review.description}
                            <br /><br />
                            <DeleteButton onClick={() => { handleDelete(reviewId) }}>Delete</DeleteButton>
                        </OwnReview>
                </UsersInfo>
            )
        )
    }

    return (
        props.user ?
            <>
                <AlbumTrack>
                    <AlbumInfo>
                        <img alt={props.album.name} src={props.album.image} />
                        <h1>{props.album.name}</h1>
                        <h3>{props.album.artists[0].name}</h3>
                        <h3>{props.album.release_date}</h3>
                    </AlbumInfo>
                    <Tracks>
                        <TrackHeader>
                            <tr>
                                <th>Track Name</th>
                                <th>Popularity</th>
                                <th></th>
                            </tr>
                        </TrackHeader>
                        {renderTracks()}
                    </Tracks>
                </AlbumTrack>
                <br></br>
                <ReviewsHeader>Reviews</ReviewsHeader>
                {otherReviews()}
                {userReview()}
                <Form onSubmit={submitHandle}>
                    <h1>Write A Review:</h1>
                    <ReviewArea name="description" onChange={changeHandle} placeholder="Review" value={description}></ReviewArea>
                    <br />
                    <RatingInput name="rating" onChange={changeHandle} placeholder="Rating" value={rating}></RatingInput>
                    <br /><br />
                    <SubmitButton type="submit">Submit Review</SubmitButton>
                </Form>
            </>
            :
            <Redirect to='/login' />
    )
}

export default AlbumStats

const AlbumTrack = styled.div`
    display: flex
`

const AlbumInfo = styled.div`
    margin-top: 7%;
    margin-left: 7%;
    text-align: center;
`

const Tracks = styled.div`
    margin-top: 8%;
`

const ReviewsHeader = styled.h1`
    text-align: center;
`

const UserImage = styled.img`
    height: 150px;
    width: 150px;
`

const UsersInfo = styled.div`
    display: flex;
`
    
const User = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3%;
    margin-left: 40px;
    margin-top: 1%;
`

const UsersReviews = styled.div`
    margin-top: -11.5%;
    margin-left: 11%;
    margin-bottom: 5%;
`
const TrackHeader = styled.table`
    font-size: 24px;
`

const ReviewArea = styled.textarea`
    height: 100px;
    width: 500px;
    font-family: 'Montserrat', sans-serif;
`

const RatingInput = styled.input`
    width: 50px;
`

const Form = styled.form`
    margin-left: 2%;
`

const OwnReview = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.5%;
    margin-left: 38px;
`
const BadgeDiv = styled.div`
    margin-top: -1%;
`

const OwnBadgeDiv = styled.div`
    margin-top: -32px;
`

const SubmitButton = styled.button`
    padding: 10px;
    background-color: #0b40ff;
    outline: none;
    border: none;
    font-size: 1em;
    color: rgb(255, 255, 255);
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
`

const DeleteButton = styled.button`
    padding: 10px;
    background-color: #ff0000;
    outline: none;
    border: none;
    font-size: 1em;
    color: rgb(255, 255, 255);
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    width: 68px;
`