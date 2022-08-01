import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "../css/QuoraBox.css";

function QuoraBox() {
  const [UID, setUID] = useState ();
  const [email, setEmail] = useState ();
  const [photo, setPhoto] = useState ();

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(()=> {
    if (user !== null) {
      setUID (user.uid)
      setEmail (user.email)
      setPhoto (user.photoURL)
    }
  }, [user]);

  

  console.log (UID)
  console.log (email)
  console.log (photo)


    return (
      <div className="quoraBox">
        <div className="quoraBox__info">
          <Avatar src={photo} />
        </div>
        <div className="quoraBox__quora">
          <h5>What do you want to ask?</h5>
        </div>
      </div>
    );
  }
  
  export default QuoraBox;