import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../constants';

const fb = !firebase.apps.length ? firebase.initializeApp(FIREBASE_CONFIG) : firebase.app();

export const auth = fb.auth();
export const db = fb.database();
