import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLgZl9ZEWt51nA-t8D51M_ZIBKdN02yb4",
  authDomain: "chatit-43675.firebaseapp.com",
  databaseURL: "https://chatit-43675.firebaseio.com",
  projectId: "chatit-43675",
  storageBucket: "chatit-43675.appspot.com",
  messagingSenderId: "594867593820",
  appId: "1:594867593820:web:cf3ef9e5f39db2d125fc99",
  measurementId: "G-MT3CYYX5C9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
