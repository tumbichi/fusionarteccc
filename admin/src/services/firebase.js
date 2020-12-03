import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../constants';

try {
  firebase.initializeApp(FIREBASE_CONFIG);
} catch (error) {
  console.log(error);
}

// eslint-disable-next-line import/prefer-default-export
export const auth = firebase.auth();
export const db = firebase.database();
