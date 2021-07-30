 import firebase from "firebase"
 
 require("@firebase/firestore")
 var firebaseConfig = {
    apiKey: "AIzaSyBSCeMTXc7AKoMwAJ70WGisNIDb-Ev68yk",
    authDomain: "story-hub-2-8a9c5.firebaseapp.com",
    projectId: "story-hub-2-8a9c5",
    storageBucket: "story-hub-2-8a9c5.appspot.com",
    messagingSenderId: "967650929809",
    appId: "1:967650929809:web:9ef235c04657620dcc6330"
  };


  firebase.initializeApp(firebaseConfig);
 export default firebase.firestore(); 
