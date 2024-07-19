"use server"
//import CRUD methods
import { db } from "@/firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { redirect } from "next/navigation";

//asynchronous function using API calls to connect with database
//POST
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
//GET ORDERS
export async function getOrders(){
    const orders = [];
    try {
        //GET docs from collection
        const response = await getDocs(collection(db,"orders"))
        console.log("Respuesta...");
        response.forEach((order)=>orders.push(order.data()))
        console.log("Orders: ", orders)
        return orders;
    } catch (error) {
        console.log(error);
    }
    redirect('/admin')
}