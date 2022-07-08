import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from "firebase/auth"


//don't pusblish this on github
const firebaseConfig = {
    apiKey: "AIzaSyCPR_piGodlIuj8bgjXsobWnX1QFmB4VCs",
    authDomain: "blog-11d5b.firebaseapp.com",
    projectId: "blog-11d5b",
    storageBucket: "blog-11d5b.appspot.com",
    messagingSenderId: "259805597682",
    appId: "1:259805597682:web:3c41ad5b7e321f0b82256b",
    measurementId: "G-7J3JMCCY18"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)



  export const db = getFirestore(app);
  