import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { questionsColRef } from '../../firebase';
import { addDoc } from "firebase/firestore";

import CloseIcon from "@material-ui/icons/Close"

import {
  AssignmentTurnedInOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@material-ui/icons"

import { Modal } from "react-responsive-modal";
import { Avatar, Button, Input } from "@material-ui/core";

import "../css/QuoraBox.css";

function QuoraBox() {
  const navigate = useNavigate ();

  const [UID, setUID] = useState ();
  const [email, setEmail] = useState ();
  const [photo, setPhoto] = useState ();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState ("")

  const [answers_count, setAnswersCount] = useState(0)
  const [question, setQuestion] = useState("");
  const [timestamp, setTimestamp] = useState (Date);
  const [religionCategory, setReligionCategory] = useState ("Christianity")
  // username missing

  console.log (answers_count)
  console.log (question)
  console.log (religionCategory)
  console.log (timestamp)
  console.log (UID)

  const Close = <CloseIcon />;
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(()=> {
    if (user !== null) {
      setUID (user.uid)
      setEmail (user.email)
      setPhoto (user.photoURL)
    }
  }, [user]);





  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try{
      setTimestamp (Date)

      // Object to paste
      const docAdd = ({ 
        answers_count: answers_count,
        question: question,
        religionCategory: religionCategory,
        timestamp: timestamp,
        username: UID,
       })

      // Paste
      addDoc(questionsColRef, docAdd)
      alert ("Success!")
      setIsModalOpen(false)
    }

    catch (e) {
      console.log (e.message)
    }
  }









  const closeModal = () => {
    setIsModalOpen (false)
  }

    return (
      <div className="quoraBox">
        <div className="quoraBox__info">
          <Avatar src={photo} />
        </div>
        <div onClick={() => setIsModalOpen(true)} className="quoraBox__quora">
          <h5>What do you want to ask?</h5>
        </div>

        <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={closeModal}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}>

            <div className="modal__title">
              <h5>Add Question</h5>
            </div>
            <div className="modal__info">
              <Avatar src={photo} className="avatar" />

              <label className="modal__scope" htmlFor="relgion_category">Category:</label>
                <select name="relgion_category" id="relgion_category" onChange={(e) => setReligionCategory(e.target.value)}>
                  <option value="Christianity">Christianity</option>
                  <option value="Islam">Islam</option>
                  <option value="Judaism">Judaism</option>
                </select>

            </div>

            <div className="modal__Field">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type=" text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "/>

            </div>
            <div className="modal__buttons">
              <button className="cancle" onClick={closeModal}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>

      </div>
    );
  }
  
  export default QuoraBox;