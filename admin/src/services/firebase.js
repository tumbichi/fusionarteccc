import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../constants';

firebase.initializeApp(FIREBASE_CONFIG);

// eslint-disable-next-line import/prefer-default-export
export const auth = firebase.auth();
export const db = firebase.database();
