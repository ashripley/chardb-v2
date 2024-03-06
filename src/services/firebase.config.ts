// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIUAhdBkIhNU8PeKvVIh23GindG0BEbvE",
  authDomain: "chardb-642dd.firebaseapp.com",
  projectId: "chardb-642dd",
  storageBucket: "chardb-642dd.appspot.com",
  messagingSenderId: "875559509553",
  appId: "1:875559509553:web:eac2b9ba951db1db5bbf10",
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
export const firestore = getFirestore(firebase)
