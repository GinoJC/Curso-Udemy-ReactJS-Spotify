import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfaFZQ71SyBf87RH58KbT0vjKqwv579jI",
    authDomain: "musicfy-7f755.firebaseapp.com",
    databaseURL: "https://musicfy-7f755.firebaseio.com",
    projectId: "musicfy-7f755",
    storageBucket: "musicfy-7f755.appspot.com",
    messagingSenderId: "162772520262",
    appId: "1:162772520262:web:b52d5b503f34210867e947"
  };

  export default firebase.initializeApp(firebaseConfig);