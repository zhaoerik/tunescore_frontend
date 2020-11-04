import React, { useState, useEffect } from 'react';
import AlbumStats from '../Components/AlbumStats';
import AlbumList from './AlbumList'
import { Route, Switch } from 'react-router-dom';


const AlbumContainer = (props) => {

    const TRACK_URL = "http://localhost:3000/tracks"

    const [trackApi, setTrackApi] = useState([]);

    useEffect(() => {
        fetch(TRACK_URL)
            .then(res => res.json())
            .then(trackData => setTrackApi(trackData))
            .catch(console.log)
    }, [])



    return (
        <div>
        {/* { props.user ? */}
            <Switch>
                <Route path={'/albums/:id'} render={(routerProps) => {
                    // console.log(routerProps)
                    let id = parseInt(routerProps.match.params.id);
                    let foundAlbum = props.albums.find(album => album.id === id);
                    return (<AlbumStats albums={props.albums} tracks={trackApi} key={foundAlbum.id} album={foundAlbum} user={props.user} users={props.users} reviews={props.reviews} newReview={props.newReview} />)
                }} />
                <Route path={'/albums'} render={() => <AlbumList albums={props.albums} />} />
            </Switch>
            {/* :
            <Redirect to='/login' />
        } */}
        </div>
    )
}

export default AlbumContainer;