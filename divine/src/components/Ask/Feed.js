import React, {useState, useEffect } from "react";
import QuoraBox from "./QuoraBox";
import Post from "./Post"

import {questionsColRef} from "../../firebase.js"
import { onSnapshot } from "firebase/firestore"

function Feed() {
  const [questions, setQuestions] = useState ()

  useEffect(() => {
    onSnapshot (questionsColRef, (snapshot) => {
      let allQuestions = []
      snapshot.docs.forEach (question => {
        allQuestions.push ({ ...question.data(), id: question.id})
      })
  
      setQuestions (allQuestions)
  
    })
  }, [questionsColRef]);


  console.log (questions)


    return (
      <div className="feed">
        <QuoraBox />

        {questions !== undefined && questions.map((question, index) => (
        <Post key={index} question={question} />
        ))}

      </div>
    );
  }
  
  export default Feed;