import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar';
import AlbumContainer from './Containers/AlbumContainer';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Login from './Components/Login';
import QuizContainer from './Containers/QuizContainer';

const USER_URL = "http://localhost:3000/users/"
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
      .then(userInfo => {
        setUserApi([userInfo, ...userApi])
        login(newUser)
        setRedirect(!redirect)
      })
  }

  const newReview = (album, user, description, rating) => {
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

  const updateBadge = (score, userId) => {
    if (score === 5) {
      fetch(USER_URL + userId, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({ badge: "Master" })

      })
    } else if (score === 4) {
      fetch(USER_URL + userId, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({ badge: "Advanced" })
      })

    }
  }


  return (
    <>
      {redirect ? <Redirect to={'/profile'} /> : null}
      <NavBar user={user} logout={logout} />
      <br></br>
      <Switch>
        <Route path='/signup' render={() => <Signup newUser={newUser} />} />
        <Route path='/login' render={() => <Login users={userApi} login={login} />} />
        <Route path='/profile' render={() => <Profile user={user} reviews={reviewApi} />} />
        <Route path='/albums' render={() => <AlbumContainer user={user} reviews={reviewApi} newReview={newReview} deleteReview={deleteReview} />} />
        <Route path='/lyricgame' render={() => <QuizContainer user={user} updateBadge={updateBadge} />} />
      </Switch>

    </>
  );
}

export default App;
