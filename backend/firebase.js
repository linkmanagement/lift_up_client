// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWEnP5dQOE5eEYMCDmRuVcLJ2JK-kbM9Q",
    authDomain: "lift-up-b3449.firebaseapp.com",
    projectId: "lift-up-b3449",
    storageBucket: "lift-up-b3449.appspot.com",
    messagingSenderId: "815358812077",
    appId: "1:815358812077:web:86c298e4cd69e2ee208b24"
};

// Initialize Firebase

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];




export { firebaseConfig, app }
