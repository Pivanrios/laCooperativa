import { db } from "@/firebaseconfig";
import { collection, getDoc, getDocs, addDoc, doc } from "firebase/firestore";

const coleccion = collection(db, "productos");
//get all dishes 
export async function getDishes(){
    try {
        const dishes = []
        const res = await getDocs(coleccion);
        res.forEach((dish)=>{
            let withId = dish.data();
            withId.id = dish.id;
            dishes.push(withId);
        });
        return dishes;
    } catch (error) {
        console.error(error);
    }
}
//getSingle dish
export async function getDish(dishId){
    try {
        console.log("Getting Dish",dishId);
        const dish = await getDoc(doc(db, "productos", dishId));
        return dish.data();
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
