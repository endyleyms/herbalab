import { collection, getDocs, addDoc}from 'firebase/firestore/';
import db from '../firebase'

async function getUser(){
    const user = collection(db, 'users');
    const userSnapchot = await getDocs(user);
    const usersList = userSnapchot.docs.map(doc => doc.data());
    return usersList
}