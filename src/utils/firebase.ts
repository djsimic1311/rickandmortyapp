import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config here
const firebaseConfig = {
	apiKey: "AIzaSyD8ZZb5TXEo6Qscj4ki8E5MKgS9MOXZSuo",
	authDomain: "shindiri-test.firebaseapp.com",
	projectId: "shindiri-text",
	storageBucket: "shindiri-test.appspot.com",
	messagingSenderId: "52617965392",
	appId: "1:52617965392:web:fc3ff399c4d2e6db6e4655",
  measurementId: "G-CBB903KCR9",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
export const firebaseAuth = getAuth(firebase);
