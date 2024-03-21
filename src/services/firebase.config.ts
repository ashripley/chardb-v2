// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoVT1rOtNIs4gb3n19tcpD0vnABkxbhrU",
  authDomain: "chardbv2.firebaseapp.com",
  projectId: "chardbv2",
  storageBucket: "chardbv2.appspot.com",
  messagingSenderId: "1082570112207",
  appId: "1:1082570112207:web:7e658440313df63a890bba",
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
export const firestore = getFirestore(firebase)
