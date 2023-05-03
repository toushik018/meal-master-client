// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0gB3n6CB61dJY6cQxWX11vkGX-6UfObM",
  authDomain: "meal-master-client2.firebaseapp.com",
  projectId: "meal-master-client2",
  storageBucket: "meal-master-client2.appspot.com",
  messagingSenderId: "591088663949",
  appId: "1:591088663949:web:0328806f14748629f7d1c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;