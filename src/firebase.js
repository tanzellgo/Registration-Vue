import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA5yNs5epC7AH1bXwui-X1tcV957vdbjak",
    authDomain: "neighbourly-6aa15.firebaseapp.com",
    databaseURL: "https://neighbourly-6aa15.firebaseio.com",
    projectId: "neighbourly-6aa15",
    storageBucket: "neighbourly-6aa15.appspot.com",
    messagingSenderId: "92169399261",
    appId: "1:92169399261:web:f8482fb013e1e3847ae434"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();