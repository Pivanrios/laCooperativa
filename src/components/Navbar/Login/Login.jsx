'use client'
//firebase functionss
import { auth } from "@/firebaseconfig";
import { useAuth } from "@/src/context/AuthContext";
import { signOut } from "firebase/auth";
//next componetns
import Link from "next/link";
//react hooks
import { useEffect, useState } from "react";

function Login() {
    //states
    const [login, setLogin] = useState(false);
    const {currentUser} = useAuth();
    //
    useEffect(()=>{
        if(currentUser){
            setLogin(true);
        }else{
            setLogin(false);
        }
    },[currentUser]);
    //logOut button
    const handleSubmit = ()=>{
        console.log("logging out")
        signOut(auth);
        setLogin(false)
    }
    return (
        <div>
            {login &&   (<div className="flex flex-col sm:flex-row gap-1">
                            <Link href={"/cupons"}>Cupons</Link>
                            <button onClick={handleSubmit}>Logout</button>
                        </div>)
            }
            {!login && <Link href={"/login"}>Login</Link>}
        </div>
    )
}
export default Login