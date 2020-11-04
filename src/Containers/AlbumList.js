import React from 'react';
import Album from '../Components/Album'

const AlbumList = (props) => {

    
    return (
        <>
            {props.albums.map(album => <Album key={album.id} album={album} />)}
        </>
    )
}

export default AlbumList;