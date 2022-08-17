// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJs1uX-ZZFdYoqu2-XUyJZItq5zxiy8_g",
    authDomain: "get-stickers-and-gifs.firebaseapp.com",
    projectId: "get-stickers-and-gifs",
    storageBucket: "get-stickers-and-gifs.appspot.com",
    messagingSenderId: "157546174416",
    appId: "1:157546174416:web:ec750f70d099e4f03bcbd5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);