import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'jaden-nuxt.firebaseapp.com',
  projectId: 'jaden-nuxt',
  storageBucket: 'jaden-nuxt.appspot.com',
  messagingSenderId: '274112974287',
  appId: '1:274112974287:web:142d44919287f50902d6ba',
  measurementId: 'G-ZMPF6JEE6K',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const functions = getFunctions(firebaseApp);

export { db, functions };
