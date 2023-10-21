// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALk48H4pUWBuG7f_pcsSGsxUwSp8agkag",
    authDomain: "ammad-hackathon.firebaseapp.com",
    databaseURL: "https://ammad-hackathon-default-rtdb.firebaseio.com",
    projectId: "ammad-hackathon",
    storageBucket: "ammad-hackathon.appspot.com",
    messagingSenderId: "292792379212",
    appId: "1:292792379212:web:8366fd804e88cd0f4d11e9",
    measurementId: "G-EW0D9SKL52"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);