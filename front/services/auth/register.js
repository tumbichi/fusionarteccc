import { auth } from '../firebase';

export const Register = (email,password) => {
    auth.createUserWithEmailAndPassword(email, password) 
    .catch (error)  
} 

