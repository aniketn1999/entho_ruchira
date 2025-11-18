// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6f0lJKXlrFznXNaHHsPRC34_CPZHlSiI",
  authDomain: "entho-ruchira.firebaseapp.com",
  projectId: "entho-ruchira",
  storageBucket: "entho-ruchira.firebasestorage.app",
  messagingSenderId: "401251985341",
  appId: "1:401251985341:web:fd9630edd45125323f94d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
export default app;