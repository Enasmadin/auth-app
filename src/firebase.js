import{initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey:"AIzaSyDSOtm1spWeo5C8PPSvP2717ZGZxUVdYiY"
  ,
  authDomain: "auth-app-db7cd.firebaseapp.com", 
  projectId: "auth-app-db7cd",
  storageBucket: "auth-app-db7cd.appspot.com",
  messagingSenderId: "660813547168",
  appId: "1:660813547168:web:cd92892ec4969efb7debc5",
  measurementId: "G-1WE4XYTXZ4"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  export default auth ;


