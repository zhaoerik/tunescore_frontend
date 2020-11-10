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
            return ("Yes")
        } else {
            return ("No")
        }
    }

    const renderTracks = () => {
        return props.album.tracks.map(track =>
            <ol key={track.id}>
                <b>{track.name}</b>  Popularity: {track.popularity} Explicit: {explicit(track.explicit)}
                <br></br>
            </ol>
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
                    <h4>{review.user.badge}</h4>
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
    // return albumReviews.map(review => 
    //     <ol key={review.id}>
    //     <img alt="" src={review.user.image} />
    //     <h3>{review.user.name}</h3>
    //     Rating: {review.rating}
    //     <br></br>
    //     Review: {review.description}
    //     </ol>
    //     )

    const userReview = () => {
        const albumReviews = reviewApi.filter(review => review.album.name === props.album.name)
        const userReview = albumReviews.filter(review => review.user.id === props.user.id)
        // for (let i =0; i < userReview.length; i++) {
        //     console.log(userReview)
        // }
        const reviewId = userReview[0]?.id;
        // console.log('album review' + albumReviews)
        // console.log('user reviews' + userReview)
        // console.log('review id' + reviewId)
        return (
            userReview.map(review =>
                <UsersInfo>
                    <ol key={review.id}>
                        <UserImage alt={review.user.name} src={review.user.image} />
                        <h3>{review.user.name}</h3>
                        <h4>{review.user.badge}</h4>
                        <UsersReviews>
                            User Rating: {review.rating}
                            <br></br>
                            User Review: {review.description}
                            <br /><br />
                            <button onClick={() => { handleDelete(reviewId) }}>Delete</button>
                        </UsersReviews>
                    </ol>
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
                        <TrackList>Tracklist</TrackList>
                        {renderTracks()}
                    </Tracks>
                </AlbumTrack>
                <br></br>
                <ReviewsHeader>Reviews</ReviewsHeader>
                {otherReviews()}
                {userReview()}
                <form onSubmit={submitHandle}>
                    <textarea name="description" onChange={changeHandle} placeholder="Review" value={description}></textarea>
                    <input name="rating" onChange={changeHandle} placeholder="Rating" value={rating}></input>
                    <button type="submit">Submit Review</button>
                </form>
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
    // display: flex;
`

const Tracks = styled.div`

`

const TrackList = styled.h2`
    margin-top: 11%;
`

const ReviewsHeader = styled.h1`

`

const UserImage = styled.img`
    height: 150px;
    width: 150px;
`

const UsersInfo = styled.div`
    display: flex;
    flexDirection: row;
`

const UsersReviews = styled.div`
    margin-top: -11.5%;
    margin-left: 11%;
    margin-bottom: 5%;
`

