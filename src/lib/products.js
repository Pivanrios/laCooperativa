"use server"
import { db } from "@/firebaseconfig";
import { collection, addDoc  } from "firebase/firestore";
import { redirect } from "next/navigation";


export async function addProduct(formData){
    console.log("adding product..")
    try {
        //getValues from input form
        const {name, price, costs, desc, sides, opsCost} = Object.fromEntries(formData);
        console.log("entries:",name,price);
        const timestamp = new Date().toDateString();
        //post doc on collection
        const docRef = await addDoc(collection(db, "productos"),{
            name: name,
            price: price,
            costs: costs,
            desc: desc,
            sides: sides,
            opsCost:opsCost
        })
        console.log("...new dish added")
    } catch (error) {
        console.error
        console.log("error",error)
    }
    redirect('/admin/products')
}