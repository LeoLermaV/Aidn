import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBJj4zVm2aKGKBOnCcqL67EJcdtHP0kaxw",
    authDomain: "aidn-db.firebaseapp.com",
    databaseURL: "https://aidn-db.firebaseio.com",
    projectId: "aidn-db",
    storageBucket: "",
    messagingSenderId: "257563315524",
    appId: "1:257563315524:web:a290b052f317101f2adb11"
  };


  firebase.initializeApp(config);




  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;