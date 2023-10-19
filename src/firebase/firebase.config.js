import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAcjTJI3C1D17cKzBJ-N0wQc-fkI57iyLo",
    authDomain: "fashion-bf05a.firebaseapp.com",
    projectId: "fashion-bf05a",
    storageBucket: "fashion-bf05a.appspot.com",
    messagingSenderId: "496766853158",
    appId: "1:496766853158:web:6530b15707fa765cc906e7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;