import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3IsUrzed3vCgI4W5Y7ytsBqU3G4CKe5c",
  authDomain: "tenedores-4cfe8.firebaseapp.com",
  projectId: "tenedores-4cfe8",
  storageBucket: "tenedores-4cfe8.appspot.com",
  messagingSenderId: "593781320409",
  appId: "1:593781320409:web:3361ac17020a569330acc8",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// .settings({ experimentalForceLongPolling: true });
