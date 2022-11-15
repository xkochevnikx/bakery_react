import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkErEa0QM5e_mKG_p9jsaPH6l_qhqxweg",
  authDomain: "bakerydatabase-864dc.firebaseapp.com",
  projectId: "bakerydatabase-864dc",
  storageBucket: "bakerydatabase-864dc.appspot.com",
  messagingSenderId: "102548721654",
  appId: "1:102548721654:web:87dfbc0524b02f1f7841d7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
