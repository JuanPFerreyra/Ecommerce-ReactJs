import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBG-G0IpA5bQ97cDStSGWF_GQqftxm856A",
  authDomain: "juan-ferreyra.firebaseapp.com",
  projectId: "juan-ferreyra",
  storageBucket: "juan-ferreyra.appspot.com",
  messagingSenderId: "969384827019",
  appId: "1:969384827019:web:fefd84dd137ab7973c1c8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
}