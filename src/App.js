import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from './screens/HomeScreen.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe; // Clean up subscription on unmount
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            {!user ? <LoginScreen /> : <Redirect to="/" />}
          </Route>

          <Route path="/profile">
            {user ? <ProfileScreen /> : <Redirect to="/login" />}
          </Route>

          <Route path="/">
            {user ? <HomeScreen /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

