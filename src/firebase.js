import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyA0JHyo-WbclhBcZx-aKCv6Wc9Pb_TiZZs",
    authDomain: "winner-afeb9.firebaseapp.com",
    projectId: "winner-afeb9",
    storageBucket: "winner-afeb9.appspot.com",
    messagingSenderId: "593582310823",
    appId: "1:593582310823:web:ea7e897628d7bbf82fa282",
    measurementId: "G-P4DJP9LNHS"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;