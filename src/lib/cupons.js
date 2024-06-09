'use server'  
import { db } from "@/firebaseconfig";
import { collection, getDoc, getDocs, addDoc, doc } from "firebase/firestore";
import { redirect } from "next/navigation";


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

export async function addCupon(formData){
      
    const {code, amount, type, exp} = Object.fromEntries(formData);
    const active = true;
    const createdAt = new Date().toDateString();
    try {
        const docRef = await addDoc(collection(db, "cupones"),{
            active: active,
            amount: amount,
            code: code,
            createdAt: createdAt,
            exp: exp,
            limit: 1,
            type: type
        })
        console.log("New document added...");
    } catch (error) {
        console.error(error);
    }
    redirect('/admin/cupons')
}