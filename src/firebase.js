// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBSd1kqz9KRgi4hykXd-1ybAlR-TtWZXw",
  authDomain: "react-firebase-auth-d55e0.firebaseapp.com",
  projectId: "react-firebase-auth-d55e0",
  storageBucket: "react-firebase-auth-d55e0.appspot.com",
  messagingSenderId: "17520320932",
  appId: "1:17520320932:web:44e2a402fb323a41ab2131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;