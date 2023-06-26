import { initializeApp } from "./firebase-app";
import { getAnalytics } from "./firebase-analytics";

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
const analytics = getAnalytics(app);
const db = firebase.firestore();

let eventArr = [];

db.collection("cal-events").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            eventArr.push(new CalEvent(doc.id, doc.name, doc.day, doc.time_begin, doc.time_end));
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

console.log(eventArr);