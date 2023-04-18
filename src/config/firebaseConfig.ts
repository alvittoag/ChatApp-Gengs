// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo00fsUvXxGxueFceQka6GMukj-JdNw7Y",
  authDomain: "gengs-app.firebaseapp.com",
  projectId: "gengs-app",
  storageBucket: "gengs-app.appspot.com",
  messagingSenderId: "469525400088",
  appId: "1:469525400088:web:219083d0c0029cc981116d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
