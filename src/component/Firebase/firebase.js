import app from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

 const firebaseConfig = {
    apiKey: "your api",
    authDomain: "fir-react-todo-dd83c.firebaseapp.com",
    databaseURL: "your url",
    projectId: "your id",
    storageBucket: "yours",
    messagingSenderId: "yours",
    appId: "your own",
    measurementId: "yours"
  };

  
  app.initializeApp(firebaseConfig);
  export const auth = app.auth();
  export const db = app.firestore();