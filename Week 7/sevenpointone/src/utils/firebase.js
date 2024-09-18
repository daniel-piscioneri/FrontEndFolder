import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import { Navigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyDfibqktIE1gP9vXl9xAlls4KIkn8UxcWg",
    authDomain: "deakin-web-app-daniel.firebaseapp.com",
    projectId: "deakin-web-app-daniel",
    storageBucket: "deakin-web-app-daniel.appspot.com",
    messagingSenderId: "397806766258",
    appId: "1:397806766258:web:e622a482f408f38250e1ab"
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const signInWithEmail = () => signInWithEmailAndPassword(auth, db.email, db.password)
    .then((userCredential) => {
        const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth.email) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        })
    } catch (error) {
        console.log('error in creating',error.message);
    }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}