import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: import.meta.FIREBASE_APP_KEY,
    authDomain: "la-cooperativa-15c15.firebaseapp.com",
    projectId: "la-cooperativa-15c15",
    storageBucket: "la-cooperativa-15c15.appspot.com",
    messagingSenderId: import.meta.MESSAGING_ID ,
    appId: import.meta.APP_ID,
    measurementId: "G-8FBKMKR430"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
