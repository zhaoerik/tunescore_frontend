import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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

    // console.log(props.users.filter(user => user.reviews.id === props.reviews.id))

    const renderTracks = () => {
        return props.album.tracks.map(track =>
            <ol key={track.id}>
                <p>{track.name}</p>
                <p>Popularity: {track.popularity}</p>
                <p>Explicit: {track.explicit}</p>
                <br></br>
            </ol>
        )
    }

    let reviewIds = props.album.reviews.map(review => review.id)
    let userReviewId = props.user.reviews.map(review => review.id)

    // console.log(reviewIds.filter(value => userReviewId.includes(value)))
    // console.log(props.user.reviews.find(review => review.id))

    // const deleteButton = () => {
    //     let reviewId = reviewIds.filter(value => userReviewId.includes(value))
    //     return <button onClick={props.deleteReview(reviewId)}>Delete</button>
    // }

    // console.log(albumReviews.filter(review => review.user.id !== props.user.id))
    // console.log(albumReviews)

    const otherReviews = () => {
        const albumReviews = reviewApi.filter(review => review.album.name === props.album.name)
        const nonUserReviews = albumReviews.filter(review => review.user.id !== props.user.id)
        return nonUserReviews.map(review =>
            <ol key={review.id}>
                <img alt="" src={review.user.image} />
                <h3>{review.user.name}</h3>
                <h4>{review.user.badge}</h4>
                    Rating: {review.rating}
                <br></br>
                    Review: {review.description}
            </ol>
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
                <ol key={review.id}>
                    <img alt="" src={review.user.image} />
                    <h3>{review.user.name}</h3>
                    <h4>{review.user.badge}</h4>
                    Rating: {review.rating}
                    <br></br>
                    Review: {review.description}
                    <br></br>
                    <button onClick={() => { handleDelete(reviewId) }}>Delete</button>
                </ol>
            )
        )
    }

    return (
        props.user ?
            <div>
                <img alt={props.album.name} src={props.album.image} />
                <h1>{props.album.name}</h1>
                <h3>{props.album.artists[0].name}</h3>
                <h3>{props.album.release_date}</h3>
                <h2>Tracklist</h2>
                {renderTracks()}
                <br></br>
                <h2>Reviews</h2>
                {otherReviews()}
                {userReview()}
                <form onSubmit={submitHandle}>
                    <textarea name="description" onChange={changeHandle} placeholder="Review" value={description}></textarea>
                    <input name="rating" onChange={changeHandle} placeholder="Rating" value={rating}></input>
                    <button type="submit">Submit Review</button>
                </form>
            </div>
            :
            <Redirect to='/login' />
    )
}

export default AlbumStats