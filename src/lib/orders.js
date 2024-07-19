"use server"
//import CRUD methods
import { db } from "@/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

//asynchronous function using API calls to connect with database
export async function addOrder(formData){
    //try and catch bloks para buscar errores.
    try {
        console.log("Setting order..")
        //destrocture the values sent.
        const {customer, delivery, dish, breakroom, quantity, disc, note} = Object.fromEntries(formData);
        //POST the entries, using await to use the promise 
        const docRef = await addDoc(collection(db, "orders"),{
            customer:customer,
            delivery,
            dish,
            breakroom,
            quantity,
            disc,
            status:"In-progress",
            note
        })
        console.log("..document added")
    } catch (error) {
        console.error
        //show the error.
        console.log("Error:",error)
    }
}