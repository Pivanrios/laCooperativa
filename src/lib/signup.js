import { auth } from "@/firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";


//create user
export async function signUpUser(formData){
    'use server'
    const {username, email, password, company, shift} = Object.fromEntries(formData);
    console.log("entries:", username, email, password, company, shift);
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      //console.log(userCredentials);  
    } catch (error) {
        console.error(error);
    }
    redirect('/');
};
