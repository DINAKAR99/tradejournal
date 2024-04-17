// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSD0Ne0mYWGJH0kpbcOCNkuLrJv2UV3LE",
  authDomain: "trade-journal-ec0ce.firebaseapp.com",
  databaseURL: "https://trade-journal-ec0ce-default-rtdb.firebaseio.com",
  projectId: "trade-journal-ec0ce",
  storageBucket: "trade-journal-ec0ce.appspot.com",
  messagingSenderId: "903708345424",
  appId: "1:903708345424:web:1689233804bad5ee00fd55",
  measurementId: "G-3L61312NGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
