// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from './firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAxKaLUSpE-YKmxSHRCwsb7btDbVCqmFQ",
  authDomain: "genius-car-services-75859.firebaseapp.com",
  projectId: "genius-car-services-75859",
  storageBucket: "genius-car-services-75859.appspot.com",
  messagingSenderId: "752223459925",
  appId: "1:752223459925:web:481c3d59f11c9b77b092dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;