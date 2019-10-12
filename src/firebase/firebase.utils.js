import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQOstLA6ex0f5xghrNaELs7XFGm4VJsEg",
    authDomain: "crwn-clothing-19ff8.firebaseapp.com",
    databaseURL: "https://crwn-clothing-19ff8.firebaseio.com",
    projectId: "crwn-clothing-19ff8",
    storageBucket: "crwn-clothing-19ff8.appspot.com",
    messagingSenderId: "239616684745",
    appId: "1:239616684745:web:6231dd234a9ce448f89318",
    measurementId: "G-R0SJMC4CTX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;