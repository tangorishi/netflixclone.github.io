import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// web app's Firebase configuration
const firebaseConfig = {
  // process.env.REACT_FIREBASE_KEY
  apiKey: "AIzaSyDjCoSFr4_5ehtfTY4Pg6ByzlAZTXRihc4",
  authDomain: "netflix-react-2578c.firebaseapp.com",
  projectId: "netflix-react-2578c",
  storageBucket: "netflix-react-2578c.appspot.com",
  messagingSenderId: "885090135151",
  appId: "1:885090135151:web:8609bda6814a183d0ef19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)