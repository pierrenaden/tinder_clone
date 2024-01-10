import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB0E_vQNqETdn2APIVuMlzD932CDRimWcs",
    authDomain: "tinder-clone-d835b.firebaseapp.com",
    projectId: "tinder-clone-d835b",
    storageBucket: "tinder-clone-d835b.appspot.com",
    messagingSenderId: "737459101701",
    appId: "1:737459101701:web:30f742886cfd8eeebe3c6c",
    measurementId: "G-LFYCCRN3GS"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const database = firebaseApp.firestore();

    export default database;