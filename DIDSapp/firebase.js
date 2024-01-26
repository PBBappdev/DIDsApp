// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDez_cbWSOcKxfdnFST1iQ4CAO07SkySos",
  authDomain: "dids-app.firebaseapp.com",
  projectId: "dids-app",
  storageBucket: "dids-app.appspot.com",
  messagingSenderId: "340993183914",
  appId: "1:340993183914:web:7041f7dcfb177e661900d3",
  measurementId: "G-2PYNWMN9HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;