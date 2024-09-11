"use server"
//import CRUD methods
import { db } from "@/firebaseconfig";
import { collection, deleteDoc, addDoc, getDocs, setDoc, doc, getDoc, updateDoc, query, where } from "firebase/firestore";
import { redirect } from "next/navigation";


//asynchronous function using API calls to connect with database
//POST
export async function addOrder(formData, userId){
    let num = 0;
    let id = "";
    const status = "confirm"
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
            status,
            note,
            timestamp,
            total,
            userId,
            points: total*50
        })
        //console.log("..document added---->", docRef.id)
        id = docRef.id
        //add order number to the history of user
        await setDoc(doc(db,"users", userId,"history", `order${num+1}`),{
            orderId: docRef.id,
            number: num+1,
            status
            
        })
        console.log("added to users history..")

    } catch (error) {
        console.error
        //show the error.
        console.log("Error:",error)
    }
    //change page 
    //    !-----------Create condition for admin or user------------------!
    redirect(`/order/${id}`)
}
//POST ADMIN ORDERS
export async function addAdminOrder(formData) {
    console.log("adding order...");
    let num = 0;
    let id = "";
    
    //default
    const status = "confirm"
    //Post order -------
    try {
        //destrocture order
        const {customer, delivery, dish, breakroom, qty, disc, note} = Object.fromEntries(formData);
        //get docs for order number
        console.log("Entries retrieved for", customer);
        //Get docs 
        const res = await getDocs(collection(db, "orders"));
        console.log("retrieved");
        res.forEach(()=>{num++});
        console.log("Number:",num);
        //timstamp
        const timestamp = new Date().toDateString();
        console.log("Timestamp:", timestamp);
        //entried
        const doc = await addDoc(collection(db, "orders"),{
            customer,
            delivery,
            disc,
            dish,
            breakroom,
            qty,
            note, 
            orderNum: num+1,
            points:400,
            status: "confirm",
            timestamp
        })
        console.log("order added:", doc.id);
        id = doc.id;
    } catch (error) {
        console.log("Error", error);
    }
    console.log("order added");
    redirect(`/admin/orders/newOrder/${id}`)
}

//GET ORDERS
export async function getOrders(){
    //collection of orders will be store here---
    const orders = [];
    try {
        //GET docs from collection
        const response = await getDocs(collection(db,"orders"))
        console.log("Respuesta...");
        response.forEach((order)=>{
                console.log("Order...")
                //we create an object
                let orderData = order.data();
                orderData.id = order.id //add id property
                console.log("User data:");
                orders.push(orderData);//add to the list
            })
        console.log("Orders retrive");
        return orders;
    } catch (error) {
        console.log(error);
    }
}
//GET USERS ORDERS
export async function getCusOrders(params) {
    console.log("getting orders");
    const history = [];
    try {
        const q = query(collection(db, "orders"), where("userId","==", params));
        //
        const res = await getDocs(q);

        //
        res.forEach((order)=>{
            let orderData = order.data();
            orderData.id = order.id
            history.push(orderData);
        })
        console.log("history retrieve")
        return history;
    } catch (error) {
        console.log(error);
    }

}

// export async function getCustomerOrders(userId) {
//     const history = [];
//     try {
//         //get collection of orders
//         console.log("getting history...")
//         const res = await getDocs(collection(db,"users", userId, "history"))
//         res.forEach((order)=>history.push(order.data()))
//         console.log("history retrieve")
//         return history;
//     } catch (error) {
//         console.log(error);
//     }
    
// }

//GET ORDER BY ID
export async function getOrderById(id) {
    console.log("getting order..", id);
    try {
        const res = await getDoc(doc(db, "orders", id));
        console.log("order retrieve...");
        return res.data();
    } catch (error) {
        console.log(error);
    }
}

//UPDATE ORDER
export async function toPaid(orderId) {
    console.log("update status to paid", orderId);
    //get reference
    const order =  doc(db, "orders", orderId);
    console.log("ORDER:");
    updateDoc(order,{
        status:"paid"
    })
    console.log("order paid")

}
//DELETE ORDER
export async function deleteOrder(params) {
 //delete order   
 console.log("delete order:", params);
 await deleteDoc(doc(db,"orders", params))
}