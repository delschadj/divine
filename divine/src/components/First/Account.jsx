import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {UserAuth} from "../../context/AuthContext"
import Avater from "../../assets/images/avater_empty.png"

import { query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Our database
import { users_colRef } from '../../firebase.js';

const Account = () => {
  const navigate = useNavigate();
  
  const [currentUser, setCurrentUser] = useState ({});
  const {user, logout} = UserAuth();
  const [mail, setMail] = useState(user.email);
  const [photoURL, setPhotoURL] = useState ("https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg");

  // Get current user once
  useEffect(()=> {
    setMail (user.email)
    
    const loadRabbit = async () => {
      const q = query(users_colRef, where("email", "==", mail));

      const unsubscribe = onSnapshot (q, (snapshot) => {
        const currentUserArray = []
        snapshot.docs.forEach (doc => {
          currentUserArray.push ({ ...doc.data(), id: doc.id})
        });
    
        setCurrentUser (currentUserArray[0])
    
        unsubscribe();
      })
    }

    loadRabbit();
    
  }, [mail]);


  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL (user.photoURL) 
    }
  }, [user])





  const handleLogout = async () => {
    try {
      await logout()
      navigate ("/")
    }
    catch (e) {
      console.log (e.message)
    }
  }

  function handleChange () {

  }

  function handleClick () {

  }

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && currentUser["email"]}</p>
      <p>Full name: {user && currentUser["full_name"]}</p>
      <p>Username: {user && currentUser["username"]}</p>
      <p>Relgion: {user && currentUser["religion"]}</p>

      <div>
        <input type="file" onChange={handleChange}></input>
        <button className='border px-6 py-2 my-4' onClick={handleClick}> Upload </button>
        <img src={photoURL}/>
      </div>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'> Logout </button>
    </div>
  );
};

export default Account;