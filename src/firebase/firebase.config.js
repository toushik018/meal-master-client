// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBZ111sAvKCtDl5l3BwrlHqdadAy59v6o",
  authDomain: "meal-master-client.firebaseapp.com",
  projectId: "meal-master-client",
  storageBucket: "meal-master-client.appspot.com",
  messagingSenderId: "687495095192",
  appId: "1:687495095192:web:4a52422fa0b7f528cec1ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;