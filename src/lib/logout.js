import { signOut } from "firebase/auth";
import { auth } from "@/firebaseconfig";

export async function logOut(){
    try {
        await signOut(auth);    
    } catch (error) {
        console.error(error);
    }   
}