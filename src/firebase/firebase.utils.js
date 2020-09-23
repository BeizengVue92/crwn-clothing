import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUN1bt39ZRW23q_Rutu5He-ZqnvVV0Lw0",
  authDomain: "crwn-db-53cbf.firebaseapp.com",
  databaseURL: "https://crwn-db-53cbf.firebaseio.com",
  projectId: "crwn-db-53cbf",
  storageBucket: "crwn-db-53cbf.appspot.com",
  messagingSenderId: "437654735556",
  appId: "1:437654735556:web:2fe7ac4d822dc13abc1791",
  measurementId: "G-6M98NXMV92",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
