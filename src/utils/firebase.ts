// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB28n1sflO5vDGp2C8RMKPsskM7oQBpT3I',
  authDomain: 'radium-draft.firebaseapp.com',
  projectId: 'radium-draft',
  storageBucket: 'radium-draft.appspot.com',
  messagingSenderId: '742647588950',
  appId: '1:742647588950:web:5cd48f14ed8dae02bdf3f7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};
