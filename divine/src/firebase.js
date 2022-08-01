import {UserAuth} from "../src/context/AuthContext"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Database
import {
  collection, getFirestore, onSnapshot,
  addDoc, deleteDoc, doc
} from "firebase/firestore"

import { getAuth, updateProfile } from "firebase/auth";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-trIS-MF3W4czewjN9nGqy6YrID-9O6M",
  authDomain: "divine2-d279b.firebaseapp.com",
  projectId: "divine2-d279b",
  storageBucket: "divine2-d279b.appspot.com",
  messagingSenderId: "151045482950",
  appId: "1:151045482950:web:05cfabae8d02b89760eac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore ()
const storage = getStorage();

// collection refs
//----------------
// users
const users_colRef = collection (db, "users")


// realtime database (snapshots)
//------------------------------
// real time users data
onSnapshot (users_colRef, (snapshot) => {
  let users = []
  snapshot.docs.forEach (user => {
    users.push ({ ...user.data(), id: user.id})
  })
})


const currentUser = getAuth ();

// Storage +Upload
export async function upload (file, currentUser, setLoading ) {
  const fileRef = ref (storage, currentUser.uid + ".png")

  setLoading (true);
  const snapshot = await uploadBytes (fileRef, file)
  const photoURL = await getDownloadURL(fileRef)

  updateProfile (currentUser, {photoURL: photoURL})


  setLoading (false)
  alert ("Uploaded")
}


export const auth = getAuth(app);
export { users_colRef, storage }

export default app