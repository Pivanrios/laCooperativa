"use server"
import { db } from "@/firebaseconfig";
import { collection, addDoc  } from "firebase/firestore";
import { redirect } from "next/navigation";


export async function addProduct(formData){
    console.log("adding product..")
    try {
        //getValues from input form
        const {name, price, cost, desc, sides, ing} = Object.fromEntries(formData);
        console.log("entries:",name,price);
        const timestamp = new Date().toDateString();
        //post doc on collection
        const docRef = await addDoc(collection(db, "productos"),{
            name: name,
            price: price,
            cost: cost,
            desc: desc,
            sides: sides,
            imagen:"",
            ing: ing
        })
        console.log("...new dish added")
    } catch (error) {
        console.error
        console.log("error",error)
    }
    redirect('/admin/products')
}