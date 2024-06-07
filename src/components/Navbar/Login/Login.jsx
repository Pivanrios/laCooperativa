'use client'
//firebase functionss
import { auth } from "@/firebaseconfig";
import { signOut } from "firebase/auth";
//next componetns
import Link from "next/link";
//react hooks
import { useState } from "react";

function Login() {
    const [login, setLogin] = useState(true);
    //

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