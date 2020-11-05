import React from 'react';
import { NavLink } from 'react-router-dom';

const Album = (props) => {

    return (
        <>
            <br></br>
            <NavLink to={`/albums/${props.album.id}`}>
                <img alt={props.album.name} src={props.album.image} />
            </NavLink>
            <h1>{props.album.name}</h1>
            <h3>{props.album.artists[0].name}</h3>
            <h3>Album Popularity: {props.album.popularity}</h3>
            <h3>Release Date: {props.album.release_date}</h3>
            <br></br>
        </>
    )
}

export default Album;