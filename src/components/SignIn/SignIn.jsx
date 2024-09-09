'use client'
//react hooks
import { useState } from "react";
//context
import { useAuth } from "@/src/context/AuthContext";
//next functions
import { useRouter } from "next/navigation";
import Link from "next/link";

//
export default function SignIn() {
    //states of component
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [error, setError] = useState("");
    //import functions from context
    const { signIn } = useAuth();
    //router to change route on website
    const router = useRouter();
    //funtcion
    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
                setError("");
                console.log("Signing In...")
                const res = await signIn(email, password);
                console.log("successfully sign in");
                router.push('/order')
            }catch (error) {
                setError("Failed to sign in");
                console.log(error.code)
            }
    }
    return (
        <div className="flex flex-col items-center">
        <h2 className=" text-2xl sm:text-4xl font-bold">Sign In</h2>
        <form onSubmit={handleSubmit}
                className="flex flex-col">
            <label htmlFor="email">Email:
            <input  type="email" required 
                    placeholder="Email" 
                    onChange={(e)=>setEmail(e.target.value)} 
                    name="email"
                    className="w-full"/>
            </label>
            <label htmlFor="password">Password:
            <input  type="password"  required 
                    placeholder="Password" 
                    onChange={(e)=>setPass(e.target.value)} 
                    className="w-full"
                    name="password"/>
            </label>
            {error && (<>
                <p>{error}</p>
                <span className="font-light text-xs">Olvidaste tu contrasena? <Link href={"/updatePass"} className="text-blue-700">Recuperar</Link> </span>
                </>
                )}
            
            <button type="submit"
                    className="btn self-end" >Sign In</button>
        </form>
        <span className="font-light text-xs">No tienes cuenta? <Link href={"/register"} className="text-blue-700">Registrate</Link> </span>
        </div>
    );
}
