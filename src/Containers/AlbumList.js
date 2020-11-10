import React from 'react';
import Album from '../Components/Album';
import Search from '../Components/Search';

const AlbumList = (props) => {

    const renderFilteredAlbums = () => {
        return props.filteredAlbum.map(album => { return <Album key={album.id} album={album} /> })
    }

    return (
        <>
            <Search value={props.search} onChange={props.onChange}/>
            <div>
                {props.filteredAlbum ? renderFilteredAlbums() : null}
            </div>

        </>
    )
}

export default AlbumList;