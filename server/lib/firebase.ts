// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYX_SVhGZlCVA0fHZ929dRx-g9uwgsRCI',
  authDomain: 'jaden-nuxt.firebaseapp.com',
  projectId: 'jaden-nuxt',
  storageBucket: 'jaden-nuxt.appspot.com',
  messagingSenderId: '274112974287',
  appId: '1:274112974287:web:142d44919287f50902d6ba',
  measurementId: 'G-ZMPF6JEE6K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
