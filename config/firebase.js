import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCQWY54hzwP2Yi_KCp9s-Ib6evkKJShlIM",
  authDomain: "react-ex1-5f46c.firebaseapp.com",
  projectId: "react-ex1-5f46c",
  storageBucket: "react-ex1-5f46c.appspot.com",
  messagingSenderId: "1061959125223",
  appId: "1:1061959125223:web:2fb1fc9c13563c8383ba42",
};
const fire = firebase.default.initializeApp(firebaseConfig);
export const fireAuth = fire.auth();
export const fireStore = fire.firestore();
