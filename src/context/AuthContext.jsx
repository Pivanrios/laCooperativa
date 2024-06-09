'use client'
// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebaseconfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

//create context
const AuthContext = createContext();
//
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
        setCurrentUser(user);
        setLoading(false);
        });

        return unsubscribe;
    }, []);
    //
    const signIn = (email, password) => {
        //console.log("on signin function", email)
        return signInWithEmailAndPassword(auth, email, password);
    };
    //
    const value = {
        currentUser,
        signIn
    };
    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    );
}
