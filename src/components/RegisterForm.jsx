'use client'
//react hooks
import { useEffect, useState } from "react";
//context
import { useAuth } from "../context/AuthContext"
//
import { useRouter } from "next/navigation";
import Link from "next/link";

function RegisterForm() {
  //
  const {currentUser} = useAuth();
  //state
  const [login, setLogin] = useState(false);
  const router = useRouter();
  //look for current user
  useEffect(()=>{
    if(currentUser){
      setLogin(true);
    }else{
      setLogin(false);
    }
  },[currentUser])
  return (
    <section className='container flex flex-col items-center gap-1 ' >
      {//if is loggin it shoulnnt allow to register a new user
      !login && <div id='register-wrapper'
          className='container flex flex-col items-center py-5 px-2'>
        <h3 className='text-2xl font-bold'>Register</h3>
        <p className=" "> Register with your email to receive cupons with discounts and add reviews to our dishes. </p>
      
        <Link href={"/register"}
                className=" btn ">Register</Link>
      </div>}
    </section>
  )
}

export default RegisterForm