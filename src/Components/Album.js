import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Album = (props) => {

    return (
        <Container>
            <NavLink to={`/albums/${props.album.id}`}>
                <AlbumImage className="album_image" alt={props.album.name} src={props.album.image} />
            </NavLink>
            <AlbumName>{props.album.name}</AlbumName>
            <AlbumInfo>
                <h3>{props.album.artists[0].name}</h3>
                <h3>Album Popularity: {props.album.popularity}</h3>
                <h3>Release Date: {props.album.release_date}</h3>
            </AlbumInfo>
        </Container>
    )
}

export default Album;

const Container = styled.div`
    float: left;
    height: 700px;
    margin-left: 47px;
    margin-bottom: -9%;
`

const AlbumImage = styled.img`
    height: 300px;
    width: 300px;
    margin-top: 20%;
    transition: transform 450ms;
    &:hover {
        transform: scale(1.08s);
      }
`

const AlbumName = styled.h1`
    text-align: center;
    font-size: 30px;
`

const AlbumInfo = styled.div`
    text-align: center;
`