import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar';
import AlbumContainer from './Containers/AlbumContainer';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Login from './Components/Login';

const USER_URL = "http://localhost:3000/users"
const REVIEW_URL = "http://localhost:3000/reviews"

const App = () => {

  const [userApi, setUserApi] = useState([]);
  const [reviewApi, setReviewApi] = useState([]);
  const [user, setUser] = useState(null);
  const [redirect, setRedirect] = useState(false);

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
    async function getReviews() {
    fetch(REVIEW_URL)
      .then(res => res.json())
      .then(reviewData => setReviewApi(reviewData))
      .catch(console.log)
    }
    getReviews()
  }, [])

  const login = el => {
    setUser(el)
  }

  const logout = el => {
    setUser(el)
  }

  const newUser = (userObj) => {
    fetch(USER_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(res => res.json())
      // .then(console.log)
      .then(userInfo => {
        setUserApi([userInfo, ...userApi])
        login(newUser)
        setRedirect(!redirect)
      })
  }

  const newReview = (album, user, description, rating) => {
    // console.log(album, user, description, rating)
    fetch(REVIEW_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        description: description,
        rating: rating,
        album: album,
        user: user
      })
    })
      .then(res => res.json())
      .then(review => setReviewApi([...reviewApi, review]))
  }

  const deleteReview = reviewId => {
    fetch(`http://localhost:3000/reviews/${reviewId}`, {
      method: 'DELETE'
    });
  }


  return (
    <>
      {redirect ? <Redirect to={'/profile'} /> : null}
      <NavBar user={user} logout={logout} />
      <br></br>
      <Switch>
        <Route path='/signup' render={() => <Signup newUser={newUser} />} />
        <Route path='/login' render={() => <Login users={userApi} login={login} />} />
        <Route path='/profile' render={() => <Profile user={user} users={userApi} reviews={reviewApi} />} />
        <Route path='/albums' render={() => <AlbumContainer users={userApi} user={user} reviews={reviewApi} newReview={newReview} deleteReview={deleteReview} />} />
      </Switch>

    </>
  );
}

export default App;
