"use server"
//import CRUD methods
import { db } from "@/firebaseconfig";
import { collection, addDoc, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
import { redirect } from "next/navigation";


//asynchronous function using API calls to connect with database
//POST
export async function addOrder(formData, userId){
    let num = 0;
    //try and catch bloks para buscar errores.
    try {
        console.log("Setting order..")
        //destrocture the values sent.
        const {customer, delivery, dish, breakroom, qty, disc, note, total} = Object.fromEntries(formData);
        //get order #
        const response = await getDocs(collection(db, "orders"))
        response.forEach(()=> num++);
        //get timestamp
        const timestamp = new Date().toDateString();
        //POST the entries, using await to use the promise 
        const docRef = await addDoc(collection(db, "orders"),{
            orderNum: num+1,
            customer:customer,
            delivery,
            dish,
            breakroom,
            qty,
            disc,
            status:"In-progress",
            note,
            timestamp,
            total
        })
        console.log("..document added")
        //add order number to the history of user
        await setDoc(doc(db,"users", userId,"history", `order${num+1}`),{
            orderId: num+1
        })
        console.log("added to users history..")

    } catch (error) {
        console.error
        //show the error.
        console.log("Error:",error)
    }
    //change page 
    //    !-----------Create condition for admin or user------------------!
    redirect(`/profile`)
}
//GET ORDERS
export async function getOrders(){
    //collection of orders will be store here---
    const orders = [];
    try {
        //GET docs from collection
        const response = await getDocs(collection(db,"orders"))
        console.log("Respuesta...");
        response.forEach((order)=>orders.push(order.data()))
        console.log("Orders retrive")
        return orders;
    } catch (error) {
        console.log(error);
    }
}
//GET USERS ORDERS
export async function getCustomerOrders(userId) {
    const history = [];
    try {
        //get collection of orders
        console.log("getting history...")
        const res = await getDocs(collection(db,"users", userId, "history"))
        res.forEach((order)=>history.push(order.data()))
        console.log("history retrieve",history)
    } catch (error) {
        console.log(error);
    }
    return history;
}