import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const Profile = (props) => {

    const renderReviews = () => {
        let userReviews = props.reviews.filter(review => review.user.id === props.user.id)
        // let albumMap = props.albums.map(album => album.id)
        // console.log(albumMap)
        if (props.user.reviews) {
            return userReviews.map(rev =>
                <>
                    <li key={rev.id}>
                        {/* <NavLink to={`/albums/${}`}> */}
                        <img alt={rev.album.name} src={rev.album.image} />
                        {/* </NavLink> */}
                    </li>
                    <p>
                        {rev.album.name}
                        <br></br>
                    Popularity: {rev.album.popularity}
                        <br></br>
                    Review: {rev.description}
                    </p>
                </>
            )
        } else {
            return (
                <h2>You have no reviews!</h2>
            )
        }
    }


return (
    props.user ?
        <div key={props.user.id}>
            <img alt="" src={props.user.image} />
            <h2>{props.user.username}</h2>
            <h4>{props.user.name}</h4>
            <h4>{props.user.email}</h4>
            {renderReviews()}
        </div>
        :
        <Redirect to='/login' />
)

}

export default Profile;

