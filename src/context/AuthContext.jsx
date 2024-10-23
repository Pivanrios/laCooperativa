'use client'
// context/AuthContext.js
//react hooks
import { createContext, useContext, useEffect, useState } from "react";
//firebase authentication and functions
import { auth } from "@/firebaseconfig";
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

//create context
const AuthContext = createContext();
//initialize use contect
export function useAuth() {
  return useContext(AuthContext);
}

//
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user){
                console.log("user found:", user.displayName);
            }else{
                console.log("user not found :c")
            }
        setCurrentUser(user);
        setLoading(false);
        });

        return unsubscribe;
    }, []);

    //sign in with email and password
    const signIn = (email, password) => {
        //console.log("on signin function", email)
        return signInWithEmailAndPassword(auth, email, password);
    };
    //reset password link
    const resetPassword = (email)=>{
        try {
            console.log("reseting password")
            sendPasswordResetEmail(auth, email);
        } catch (error) {
         console.log(error)   
        }
        console.log("email sent")
    }

    //context  values to pass by
    const value = {
        currentUser,
        signIn,
        resetPassword
    };
    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    );
}
