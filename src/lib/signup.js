'use server'
import { auth } from "@/firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";


//create user
export async function signUpUser(formData){
    let userCredentials = null
    const {username, email, password, company, shift} = Object.fromEntries(formData);
    console.log("entries:", username, email, password, company, shift);
    try {
      userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      //console.log(userCredentials);  
    } catch (error) {
        console.error(error);
    }
    if(userCredentials){
      redirect('/login')
    }
};
