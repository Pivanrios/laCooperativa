import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAuUdm1s_PLC6JcpeyajBXDcZfDePG5cBI",
  authDomain: "la-cooperativa-15c15.firebaseapp.com",
  projectId: "la-cooperativa-15c15",
  storageBucket: "la-cooperativa-15c15.appspot.com",
  messagingSenderId: "672855187407",
  appId: "1:672855187407:web:44b5a3ba0cf5381e7a7cba",
  measurementId: "G-8FBKMKR430"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
