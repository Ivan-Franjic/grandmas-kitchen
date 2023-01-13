import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7mgyL-PLYgG3PB40BzBIP7ag2bZGAEfo",
  authDomain: "cookbook-36ecd.firebaseapp.com",
  databaseURL:
    "https://cookbook-36ecd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cookbook-36ecd",
  storageBucket: "cookbook-36ecd.appspot.com",
  messagingSenderId: "453883745796",
  appId: "1:453883745796:web:04a16956d9b09bea550751",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
