//import { initializeApp } from "./firebase-app";
//import { getAnalytics } from "./firebase-analytics";
// import * as firebase from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
// import "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { collection, getDocs, addDoc, Timestamp, query } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAz6i0xdk6-AnIcQiv7OO2lEicoxYluUYs",
  authDomain: "lab-cal.firebaseapp.com",
  projectId: "lab-cal",
  storageBucket: "lab-cal.appspot.com",
  messagingSenderId: "935486921409",
  appId: "1:935486921409:web:e9a41566365a6ec8d29240",
  measurementId: "G-ZSE6R1MJ3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


const q = query(collection(db, "cal-events"));
const querySnapshot = await getDocs(q);

let eventArr = [];

querySnapshot.forEach((doc) => {
    eventArr.push(new CalEvent(doc.id, doc.name, doc.day, doc.time_begin, doc.time_end));
});

eventArr.forEach((ev) => {
    if (eventArr.indexOf(ev) === 0) {
        ev.addEvent();
    } else if (eventArr.indexOf(ev) === -1) {
        console.log("Index is -1!");
    } else {
        ev.addEvent(eventArr[(eventArr.indexOf(ev) - 1)])
    }
});