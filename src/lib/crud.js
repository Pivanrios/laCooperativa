import { db } from "@/firebaseconfig";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";

const coleccion = collection(db, "productos");
//get all dishes 
export async function getDishes(){
    try {
        const dishes = []
        const res = await getDocs(coleccion);
        res.forEach((dish)=>{
            dishes.push(dish.data());
        });
        console.log("productos:",dishes);
        return dishes;
    } catch (error) {
        console.error(error);
    }
}
//getSingle dish
export async function getDish({dishId}){
    try {
        console.log("Getting Dish");
    } catch (error) {
        console.error(error)
    }
}
//delete function 
export async function deleteDish({dishId}){
    try {
        console.log("Deleting dish...");
    } catch (error) {
        console.log(error);
    }
}
