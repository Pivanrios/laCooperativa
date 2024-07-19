"use server"
import { db } from "@/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

export async function addOrder(formData){
    try {
        console.log("Setting order..")
        const {customer, delivery, dish, breakroom, quantity, disc} = Object.fromEntries(formData);
        
        const docRef = await addDoc(collection(db, "orders"),{
            customer:customer,
            delivery:delivery,
            dish,
            breakroom,
            quantity,
            disc,
            status:"In-progress"
        })
        console.log("..document added")
    } catch (error) {
        console.error
        console.log(error)
    }
}