'use server'
import { auth } from "@/firebaseconfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { redirect } from "next/navigation";


//create user
export async function signUpUser(formData){
  //setup variables...
    let user = null
    const {username, email, password } = Object.fromEntries(formData);
    //console.log("entries:", username, email, password);
    try {
      //create user with email address to our firebase authentication service
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      user = userCredentials.user
      console.log("succesfully created...", user);  
      //set username
      await updateProfile(user, {
        displayName: username,
      })
      console.log("username successfully added...", user.displayName);

    } catch (error) { //customize errors for debbuging
        console.error(error);
        if(error.code == 'auth/email-already-in-use' ){
          console.log("Email in use!!!");
        }else if(error.code == 'auth/weak-password'){
          console.log('weak password!!!');
        }else if(error.code == 'auth/invalid-email'){
          console.log("Invalid email address...");
        }else{
          console.log("Something went wrong!!!")
        }
    }
    if(user){//if user is succesfully added go to SignIn Porces
      redirect('/login')
    }
};
