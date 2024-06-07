'use client'
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"


function RegisterForm() {
  const {currentUser} = useAuth();
  const [login, setLogin] = useState(false);
  useEffect(()=>{
    if(currentUser){
      setLogin(true);
    }else{
      setLogin(false);
    }
  },[currentUser])
  return (
    <section className='container flex flex-col items-center gap-1 ' >
      {!login && <div id='register-wrapper'
          className='container flex flex-col items-center py-5 px-2'>
        <h3 className='text-2xl font-bold'>Register</h3>
        <p className=" "> Register with your email to receive cupons with discounts and add reviews to our dishes. </p>
      
        <button className='btn self-center'>Register</button>
      </div>}
    </section>
  )
}

export default RegisterForm