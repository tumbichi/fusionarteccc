import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../constants/config';

try {
  firebase.initializeApp(FIREBASE_CONFIG);
  console.log('Inicializado');
} catch (err) {
  console.log(err);
}

export const db = firebase.database();
export const auth = firebase.auth();
