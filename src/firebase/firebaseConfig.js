// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXHzgos46-o7-6mdWJJdV_WC6o7teGUIw",
  authDomain: "fkshope-2b607.firebaseapp.com",
  projectId: "fkshope-2b607",
  storageBucket: "fkshope-2b607.appspot.com",
  messagingSenderId: "1089357919452",
  appId: "1:1089357919452:web:718cfe783bab40138ff019",
  measurementId: "G-Q35GZ5YW97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app);
const storage =getStorage(app);
const db =getFirestore(app)
export {auth,storage,db}