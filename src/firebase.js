
//to use firebase app
// import firebase from 'firebase/app'; //older version
import firebase from 'firebase/compat/app'; //v9

//to use auth
// import 'firebase/auth'; //older version
import 'firebase/compat/auth'; //v9

//to use firestore
// import 'firebase/firestore'; //Older Version
import 'firebase/compat/firestore'; //v9

const firebaseConfig = {
    apiKey: "AIzaSyCAfNF2EBhhdER2OrXnqoKL3D311KWqmX0",
    authDomain: "linkedin-clone-fdo.firebaseapp.com",
    projectId: "linkedin-clone-fdo",
    storageBucket: "linkedin-clone-fdo.appspot.com",
    messagingSenderId: "528210792097",
    appId: "1:528210792097:web:19b5a02e89c09c6d96eae0"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }
  