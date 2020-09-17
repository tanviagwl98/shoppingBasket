import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import { functions } from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAuTSA7pBObGjkfskQabiek-jcgJcqh9cs",
  authDomain: "bsocial-ae077.firebaseapp.com",
  databaseURL: "https://bsocial-ae077.firebaseio.com",
  projectId: "bsocial-ae077",
  storageBucket: "bsocial-ae077.appspot.com",
  messagingSenderId: "636463748309",
  appId: "1:636463748309:web:9713d1005540fc0d0e7e5c",
  measurementId: "G-7TD9DM0NEL"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};