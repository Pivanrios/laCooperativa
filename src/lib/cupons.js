import { db } from "@/firebaseconfig";
import { collection, getDoc, getDocs, addDoc, doc } from "firebase/firestore";


export async function getCupons(){
    try {
        const cupons = [];
        const res = await getDocs(collection(db,"cupones"));
        res.forEach((doc)=>{
            cupons.push(doc.data());
        })
        return cupons;
    } catch (error) {
        console.error(error)
    }
}