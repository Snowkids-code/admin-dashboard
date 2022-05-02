// import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyDN7wQKnHow26MUQYyun_Pfz9sgVB7yBFI",
  authDomain: "flirtymatures-dating.firebaseapp.com",
  databaseURL: "https://flirtymatures-dating.firebaseio.com",
  projectId: "flirtymatures-dating",
  storageBucket: "flirtymatures-dating.appspot.com",
  messagingSenderId: "956825303820",
  appId: "1:956825303820:web:8a87475c6fc7b88f7e2729",
  measurementId: "G-Y0RC06VYV4",
};

// Initialize Firebase
const app = initializeApp(config);

//auth
export const auth = getAuth();

export const db = getFirestore(app)