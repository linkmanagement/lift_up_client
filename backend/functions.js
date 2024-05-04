import { app } from './firebase';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore/lite';
const database = getFirestore(app);

async function addLead(lead) {
    // name, instagram, number, onlyfans, earnings
    const data = {
        name: lead.name,
        instagram: lead.instagram,
        number: lead.number,
        onlyfans: lead.onlyfans,
        earnings: lead.earnings,
        createdAt: Date.now()
    };
    try {
        const docRef = await addDoc(collection(database, "leads"), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


async function getLeads() {
    const leads = [];
    const q = query(collection(database, "leads"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        leads.push({ id: doc.id, ...doc.data() });
    });
    return leads;
}

export { addLead, getLeads };