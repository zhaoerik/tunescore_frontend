import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const AlbumStats = (props) => {

    const [description, setDescription] = useState("");
    const [rating, setRating] = useState('');

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
        // let userReviews = props.reviews.filter(review => review.user.id === props.user.id)

        props.newReview(props.album, props.user, description, rating)
        setDescription("");
        setRating("");
        // if (userReviews) {
        //     alert('You have already submitted a review!')
        // } else {
        //     props.newReview(reviewObj)
        // }

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
    
    // const deleteButton = () => {
    //     let review = props.reviews.find(review => review.album.name === props.album.name)
    //     if (review)
    //         return <button onClick={props.deleteReview(review.id)}>Delete</button>
    // }
    
    
    const renderReviews = () => {
        let albumReviews = props.reviews.filter(review => review.album.name === props.album.name)
        
        return albumReviews.map(review => 
            <ol key={review.id}>
            <img alt="" src={review.user.image} />
            <h3>{review.user.name}</h3>
            Rating: {review.rating}
            <br></br>
            Review: {review.description}
            </ol>
            )
        
        // if (albumReviews.map(review => review.user.id !== props.user.id)) {
        //     return albumReviews.map(review =>
                        // <ol key={review.id}>
                        //     <img alt="" src={review.user.image} />
                        //     <h3>{review.user.name}</h3>
                        //     Rating: {review.rating}
                        //     <br></br>
                        //     Review: {review.description}
                        // </ol>
        //     )
        // } else if (albumReviews.map(review => review.user.id === props.user.id)) {
        //     return albumReviews.map(review =>
        //         <ol key={review.id}>
        //             <img alt="" src={review.user.image} />
        //             <h3>{review.user.name}</h3>
        //             Rating: {review.rating}
        //             <br></br>
        //             Review: {review.description}
        //             <br></br>
        //             {/* {deleteButton()} */}
        //         </ol>
        //     )
        // }

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
                {renderReviews()}
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