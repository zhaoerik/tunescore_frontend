import React, { useState, useEffect } from 'react';
import AlbumStats from '../Components/AlbumStats';
import AlbumList from './AlbumList'
import { Route, Switch, Redirect } from 'react-router-dom';

const TRACK_URL = "http://localhost:3000/tracks"
const ALBUM_URL = "http://localhost:3000/albums"
const USER_URL = "http://localhost:3000/users/"

const AlbumContainer = (props) => {

  const [userApi, setUserApi] = useState([]);
  const [trackApi, setTrackApi] = useState([]);
  const [albumApi, setAlbumApi] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredAlbum, setFilteredAlbum] = useState("");

  useEffect(() => {
    async function getUserData() {
        fetch(USER_URL)
            .then(res => res.json())
            .then(userData => setUserApi(userData))
            .catch(console.log)
    }
    getUserData()
}, [])

  useEffect(() => {
    async function getTrackUrl() {
      fetch(TRACK_URL)
        .then(res => res.json())
        .then(trackData => setTrackApi(trackData))
        .catch(console.log)
    }
    getTrackUrl()
  }, [])

  useEffect(() => {
    async function getAlbumUrl() {
      fetch(ALBUM_URL)
        .then(res => res.json())
        .then(albumData => setAlbumApi(albumData))
        .catch(console.log)
    }
    getAlbumUrl()
  }, [])

  const searchAlbum = e => {
    setSearch(e.target.value)
  }

  const filterAlbum = () => {
    let filteredArray = albumApi.filter(album => {
      return album.name.toLowerCase().includes(search)
    })
    setFilteredAlbum(filteredArray)
  }

  useEffect(() => {
    filterAlbum()
  }, [albumApi, search])


  return (
    <div>
      { props.user ?
        <Switch>
          <Route path={'/albums/:id'} render={(routerProps) => {
            let id = parseInt(routerProps.match.params.id);
            let foundAlbum = albumApi.find(album => album.id === id);
            return (<AlbumStats albums={props.albums} tracks={trackApi} key={foundAlbum.id} album={foundAlbum} user={props.user} users={userApi} reviews={props.reviews} newReview={props.newReview} deleteReview={props.deleteReview} setSearch={setSearch} />)
          }} />
          <Route path={'/albums'} render={() => <AlbumList albums={albumApi} filteredAlbum={filteredAlbum} onChange={searchAlbum} search={search} />} />
        </Switch>
        :
        <Redirect to='/login' />
      }
    </div>
  )
}

export default AlbumContainer;