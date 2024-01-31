// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDez_cbWSOcKxfdnFST1iQ4CAO07SkySos",
  authDomain: "dids-app.firebaseapp.com",
  databaseURL: "https://dids-app-default-rtdb.firebaseio.com",
  projectId: "dids-app",
  storageBucket: "dids-app.appspot.com",
  messagingSenderId: "340993183914",
  appId: "1:340993183914:web:41a6d83633037f2e1900d3",
  measurementId: "G-2067WJ4MT5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);

export {firebaseApp};