import { auth } from "@/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function login(formData){
    "use server"
    const {email, password} = Object.fromEntries(formData);

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        //console.log("credenciales", credentials);
    } catch (error) {
        console.error(error);
    }
};