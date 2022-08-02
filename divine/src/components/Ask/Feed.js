import React, {useState, useEffect } from "react";
import QuoraBox from "./QuoraBox";
import Post from "./Post"

import {questionsColRef, answersColRef} from "../../firebase.js"
import { onSnapshot } from "firebase/firestore"

function Feed() {
  const [questions, setQuestions] = useState ()
  const [answers, setAnswers] = useState ()

  useEffect(() => {
    onSnapshot (questionsColRef, (snapshot) => {
      let allQuestions = []
      snapshot.docs.forEach (question => {
        allQuestions.push ({ ...question.data(), id: question.id})
      })
  
      setQuestions (allQuestions)
  
    })

    onSnapshot (answersColRef, (snapshot) => {
      let allAnswers = []
      snapshot.docs.forEach (answer => {
        allAnswers.push ({ ...answer.data(), id: answer.id})
      })
  
      setAnswers (allAnswers)
  
    })
  }, [questionsColRef]);





    return (
      <div className="feed">
        <QuoraBox />

        {questions !== undefined && questions.map((question, index) => (
        <Post key={index} question={question} answers={answers} />
        ))}

      </div>
    );
  }
  
  export default Feed;