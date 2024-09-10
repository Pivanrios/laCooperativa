'use server'
import { auth, db } from "@/firebaseconfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { redirect } from "next/navigation";
//Set document
import { setDoc, doc, getDoc } from "firebase/firestore";


//create user
export async function signUpUser(formData){
  //setup variables...
    let user = null
    const {username, email, password, shift } = Object.fromEntries(formData);
    //console.log("entries:", username, email, password);
    try {
      //create user with email address to our firebase authentication service
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      user = userCredentials.user
      console.log("succesfully created user...");  
      //set username
      await updateProfile(user, {
        displayName: username,
        photoURL: `https://firebasestorage.googleapis.com/v0/b/la-cooperativa-15c15.appspot.com/o/users%2FScreenshot%202024-06-07%20111141.png?alt=media&token=6bedfaea-220f-4f5f-88b4-5f9f4aa507a4`
      })
      console.log("username successfully added...", user.displayName);
      //set user collection
      const docRef =  await setDoc(doc(db,"users", user.uid),{
        shift,
        points: 10000//initial points
      })

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
//user info
export async function getUserData(userId){
  console.log("getting user collection");
  const res = await getDoc(doc(db,"users", userId));
  console.log("Response:", res.data());
  return res.data();

}