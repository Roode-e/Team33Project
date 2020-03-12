// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDtEPK96lFKUMEuDMlChgpOb1pJIYe92dw",
    authDomain: "ultra-tab.firebaseapp.com",
    databaseURL: "https://ultra-tab.firebaseio.com",
    projectId: "ultra-tab",
    storageBucket: "ultra-tab.appspot.com",
    messagingSenderId: "166067037964",
    appId: "1:166067037964:web:8a8e0f3d5f603cf7938b29"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();