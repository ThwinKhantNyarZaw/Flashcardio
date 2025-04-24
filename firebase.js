// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoMC6SE58fC58uDB0fbtU1YyigLE5DDvU",
  authDomain: "flashcardio-11.firebaseapp.com",
  projectId: "flashcardio-11",
  storageBucket: "flashcardio-11.firebasestorage.app",
  messagingSenderId: "669106215792",
  appId: "1:669106215792:web:b1e9240a314abc7d6bcdb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);