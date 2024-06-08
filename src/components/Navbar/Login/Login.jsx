'use client'
//firebase functionss
import { auth } from "@/firebaseconfig";
import { useAuth } from "@/src/context/AuthContext";
import { signOut } from "firebase/auth";
//next componetns
import Link from "next/link";
//react hooks
import { useEffect, useState } from "react";
import LinkItem from "../Links/LinkItem";

function Login({setOpen}) {
    //states
    const [login, setLogin] = useState(false);
    const {currentUser} = useAuth();
    const cupons = {title: "Cupons", path: '/cupons'} 
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
                            <LinkItem setOpen={setOpen} item={cupons}/>
                            <button onClick={handleSubmit}
                                    className="px-3 bg-red-800 text-white rounded-full"
                                    >Logout</button>
                        </div>)
            }
            {!login && <Link href={"/login"} 
                            onClick={()=>setOpen(prev=> !prev)}
                            className="px-3 py-1 rounded-full forced-colors:appearance-auto bg-green-700 text-white">Login</Link>}
        </div>
    )
}
export default Login