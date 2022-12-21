import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBZ5hR2e5xy4UdkbfmsG8FUYYz4mVOlknE",
    authDomain: "project1-d727d.firebaseapp.com",
    projectId: "project1-d727d",
    storageBucket: "project1-d727d.appspot.com",
    messagingSenderId: "91198384170",
    appId: "1:91198384170:web:3cf01179ba21e7798f3b53",
    measurementId: "G-TVSFBMT53G"
  };

  export default firebase.initializeApp(firebaseConfig)