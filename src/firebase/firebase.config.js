// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe2oFEi70u_GFmwR_71AOzuBorigz0K5s",
  authDomain: "dolly-portfolio.firebaseapp.com",
  projectId: "dolly-portfolio",
  storageBucket: "dolly-portfolio.appspot.com",
  messagingSenderId: "902078310815",
  appId: "1:902078310815:web:0475810560bf8ffaf9f5aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth