  "use server"
import { auth } from "@/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function login(formData){
    console.log(formData)
    const {email, password} = Object.fromEntries(formData);
    let credentials = {}

    try {
        console.log("sign in with email:", email)
        const res = await signInWithEmailAndPassword(auth, email, password);
        
        console.log("credenciales", res.user.accessToken);
    } catch (error) {
        console.error(error);
    }
    return credentials;
};