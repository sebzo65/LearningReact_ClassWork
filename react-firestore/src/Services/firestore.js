// Import the functions you need from the SDKs you need
//These are coming from a JS library
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//The info we need to authenticate with firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlcWr4xMi-tZ3SemRNDFCG6lQj4F35pKk",
  authDomain: "iceland-firestore-54ffc.firebaseapp.com",
  projectId: "iceland-firestore-54ffc",
  storageBucket: "iceland-firestore-54ffc.appspot.com",
  messagingSenderId: "944601439306",
  appId: "1:944601439306:web:e2a4e21711d72174489ab3",
};
//Setting up our firestore app
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore;
//Exporting a firebase.firestore (Firestore object)
//& then using methods in docs to interact with database
