'use client'
// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebaseconfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

//create context
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);


  const signIn = (email, password) => {
    console.log("on signin function", email, password)
    return signInWithEmailAndPassword(auth, email, password);
  };

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
