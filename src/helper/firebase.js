// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAScqMCNtb49Bm8FpDaN7nA4Dkni1sRgo",
  authDomain: "cursos-alfa-web-5c0a6.firebaseapp.com",
  projectId: "cursos-alfa-web-5c0a6",
  storageBucket: "cursos-alfa-web-5c0a6.appspot.com",
  messagingSenderId: "903881172494",
  appId: "1:903881172494:web:2add1fff8497df89ee7e5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;
