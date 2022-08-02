import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import Modal from "react-responsive-modal"
import CloseIcon from "@material-ui/icons/Close"

import parse from 'html-react-parser';

import Icon1 from "../../assets/images/Icon1.jpg"

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {storage, answersColRef, questionsColRef, db } from "../../firebase"
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, addDoc, updateDoc, doc, increment } from "firebase/firestore";
import { set } from "firebase/database";

import { Avatar } from "@material-ui/core";


import "../css/Feed.css"
import "../css/Post.css";
import "react-responsive-modal/styles.css"
import "react-quill/dist/quill.snow.css";

function Post ({question, answers}) {

    const [error, setError] = useState ();
    const [isModalOpen, setIsModalOpen] = useState (false)

    const [currentQuestion, setCurrentQuestion] = useState ();
    const [timestamp, setTimestamp] = useState (Date);
    const [upvotes, setUpvotes] = useState (0);
    const [answer, setAnswer] = useState("");

    const auth = getAuth();
    const user = auth.currentUser;
    const Close = <CloseIcon/>

    const parse = require('html-react-parser');
    const answersForQuestion = []

    const getAllAnswers = () => {
        answers.forEach (answer => {
            if (answer["questionID"] === question.id)
            {
                answersForQuestion.push ({ ...answer})
            }
        })
    }

    getAllAnswers()

    const handleAnswerClick = (value) => {
        setIsModalOpen(true)
        setCurrentQuestion (value)
    }

    const handleAnswerText = (value) => {
        setAnswer(value);
      };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
    
        try{

        // Update questionDoc
        const questionRef = doc(questionsColRef,  currentQuestion);

        // Set the "capital" field of the city 'DC'
        await updateDoc(questionRef, {
            answers_count: increment(1)
        });

        // Upload Answer
          setTimestamp (Date)
    
          // Object to paste
          const docAdd = ({
            username: user.displayName,
            userID: user.uid,
            questionID: currentQuestion,
            answer: answer,
            timestamp: timestamp,
            upvotes: upvotes,
           })
    
          // Paste
          addDoc(answersColRef, docAdd)
          alert ("Success!")
          setIsModalOpen(false)
        }
    
        catch (e) {
          console.log (e.message)
        }
      }
      
    const getImage = (uid) => {
        const pathReference = ref(storage, uid + ".png");
        // console.log (uid + ".png")
        

        getDownloadURL(pathReference)
            .then((url) => {
                // `url` is the download URL
                // window.open(url,'_blank');
            })
            .catch((error) => {
                // Handle any errors
            });


        return Icon1

    
    }


    return (
        <div className="post">

            <div className="post__info">
                <Avatar src={getImage(question.uid)} />
                <h4>{question.uid + ".png"}</h4>
                <h4 onClick={getImage}>{question.username}</h4>
                <small> {question.timestamp.toLocaleString()} </small>
            </div>

            <div className="post__body">
                <div className="post__question">
                    <p> {question.question} </p>
                </div>

                    <button onClick={()=> handleAnswerClick(question.id)} className="post__btnAnswer"> Answer </button>
                    <Modal
                        open={isModalOpen}
                        closeIcon={Close}
                        onClose={() => setIsModalOpen(false)}
                        closeOnEsc
                        center
                        closeOnOverlayClick={false}
                        styles={{
                            overlay: {
                            height: "auto",},}}>

                        <div className="modal__question">
                            <h1> {question.question} </h1>
                            <p> asked by <span className="name"> {question.username} </span> on{" "}
                                <span className="name">
                                    {question.timestamp.toLocaleString()}
                                </span>
                            </p>
                        </div>

                        <div className="modal__answer">
                            <ReactQuill
                                value={answer}
                                onChange={handleAnswerText}
                                placeholder="Enter your answer"
                                type="text"/>
                        </div>

                        <div className="modal__button">
                            <button className="cancle" onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>

                            <button onClick={handleSubmit} type="submit" className="add">
                                Add Answer
                            </button>
                        </div>
                        

                    </Modal>

            </div>

            <p style={{
                color: "rgba(0,0,0,0.5)",
                fontSize: "12px",
                fontWeight: "bold",
                margin: "0",}}>

                {question.answers_count} Answers
            </p>
            

            

                 {answersForQuestion.map(( answerObject ) => (
                <>
                    <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        padding: "10px 5px",
                        borderTop: "1px solid lightgray",
                    }}
                    className="post-answer-container"
                    >
                    <div
                        style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#888",
                        }}
                        className="post-answered"
                    >
                        <Avatar />
                        <div
                        style={{
                            margin: "0px 10px",
                        }}
                        className="post-info"
                        >
                        <p>{answerObject["username"]}</p>
                        </div>
                    </div>
                    <div className="post-answer">{parse(answerObject["answer"])}</div>
                    </div>
                </>
                ))}
                  



        </div>
    )
}

export default Post