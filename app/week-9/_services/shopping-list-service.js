import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    const items = [];
    const collectionRef = query(collection(db, "users", userId, 'items'));
    try{
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
            items.push({id: doc.id, ...doc.data()});
    });
    }catch(err){
        console.log(err);
    }
return items;
}

async function addItem(userId, item) {
    const collectionRef = collection(db, "users", userId, 'items');
    try{
        const docRef = await addDoc(collectionRef, item);
        return docRef.id;
        }catch(err){
            console.log(err);
            }
}

export {getItems, addItem};