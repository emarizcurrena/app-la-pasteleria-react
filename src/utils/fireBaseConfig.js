// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE_zzujV4Yb57M2RU7qWFvlo7Vf7XHvHM",
    authDomain: "la-pasteleria-b1abe.firebaseapp.com",
    projectId: "la-pasteleria-b1abe",
    storageBucket: "la-pasteleria-b1abe.appspot.com",
    messagingSenderId: "319726413734",
    appId: "1:319726413734:web:c6c25b1b6af71eed401167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore initialize 
const db = getFirestore(app)

export default db