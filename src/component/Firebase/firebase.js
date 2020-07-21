import app from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

 const firebaseConfig = {
    apiKey: "AIzaSyB1nWP8-JUWcxTl147ML1-0NSw_9q5kzQY",
    authDomain: "fir-react-todo-dd83c.firebaseapp.com",
    databaseURL: "https://fir-react-todo-dd83c.firebaseio.com",
    projectId: "fir-react-todo-dd83c",
    storageBucket: "fir-react-todo-dd83c.appspot.com",
    messagingSenderId: "846056850936",
    appId: "1:846056850936:web:6f8a7bfc3cb0c7eaf1c20d",
    measurementId: "G-QFHVTHB60P"
  };

  
  app.initializeApp(firebaseConfig);
  export const auth = app.auth();
  export const db = app.firestore();