// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMRNF6qlAXRzH4e1i9qTJkDHm3NZaNPc",
  authDomain: "dragon-news-d9d24.firebaseapp.com",
  projectId: "dragon-news-d9d24",
  storageBucket: "dragon-news-d9d24.firebasestorage.app",
  messagingSenderId: "610267617943",
  appId: "1:610267617943:web:a114778bb9e8b6cd2ee7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;