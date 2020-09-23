// Rename this file to "firebaseConfig.js" before use
// Replace all XXXXs with real Firebase API keys
import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDdu_TMVzvjY09yI0krxIrZRz_w8SQ8Y10",
  authDomain: "feedelity-a7884.firebaseapp.com",
  databaseURL: "https://feedelity-a7884.firebaseio.com",
  projectId: "feedelity-a7884",
  storageBucket: "feedelity-a7884.appspot.com",
  messagingSenderId: "350765539295",
  appId: "1:350765539295:web:1ca6b185d8a56b4536ee6a",
  measurementId: "G-06Y93JPGKG"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
// test //