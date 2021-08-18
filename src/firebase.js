import firebase from "firebase"; 


const firebaseConfig = {
    apiKey: "AIzaSyATXVCYH9canLqQhQytsEW1pc1I_LxSO7U",
    authDomain: "bt-clone.firebaseapp.com",
    projectId: "bt-clone",
    storageBucket: "bt-clone.appspot.com",
    messagingSenderId: "993714632730",
    appId: "1:993714632730:web:575409a6bffb5dcf0979a3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();  
  const provider = new firebase.auth.GoogleAuthProvider(); 
  const storageref = firebase.storage().ref()  

  export {auth, provider, storageref};
  export default db;  
  