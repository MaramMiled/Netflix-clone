import React from 'react';
import Nav from '../Nav';
import "./PlansScreen.js";
import "./ProfileScreen.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from "../firebase.js";
import PlansScreen from './PlansScreen.js';

function ProfileScreen() {
    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
            <img src='https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png' 
            alt='' />
            <div className='profileScreen_details'>
                <h2>{user.email}</h2>
                <div className='profileScreen_plans'>
                    <h3>Plans</h3>
                    <PlansScreen />
                    <button onClick={() => auth.signOut()} 
                    className='profileScreen_signOut'>Sign Out</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;
