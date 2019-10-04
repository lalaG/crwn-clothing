import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyALqyO8c7JwKnZjaEApwtt2j6LsZFfNBso",
    authDomain: "crwn-clothing-aa689.firebaseapp.com",
    databaseURL: "https://crwn-clothing-aa689.firebaseio.com",
    projectId: "crwn-clothing-aa689",
    storageBucket: "",
    messagingSenderId: "3601644950",
    appId: "1:3601644950:web:33df25c966c42f7ef031b7",
    measurementId: "G-WS0QSVL064"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;