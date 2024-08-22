'use client'
//function to register user on db
import { signUpUser } from "@/src/lib/signup"
import Link from "next/link";
//react hooks
import { useEffect, useState } from "react"

function Signup() {
  //add some states
  const [password, setPassword] = useState(""); //password
  const [passVer, setPassVer] = useState(""); //password verification
  const [valid, setValid] = useState(false); // bool that allows to continue
  //use effect
  useEffect(()=>{
    if(password === passVer){
      //if passwords are the same, the submit button will appear.
      setValid(true);
    }else{
      setValid(false);
    }
  },[passVer]);
  return (
    <section className='container flex flex-col items-center gap-1 p-2' >
      <div id='register-wrapper'
          className='container flex flex-col items-center py-5 px-2'>
        <h3 className='text-2xl font-bold'>SignUp</h3>
        <p className=" "> Register with your email to receive cupons with discounts and add reviews to our dishes. </p>
        <div>
          <form action={signUpUser} className='container flex flex-col p-3 gap-1' id='register-form'>
            <label>Username: 
              <input type="text" 
                      name="username" 
                      id="username" 
                      required 
                      className="w-full" 
                      placeholder="example"/> 
            </label>
            <label>EmailAdr: 
              <input type='text' 
                      name="email"
                      id="email" 
                      required 
                      className="w-full"  
                      placeholder="email@dress.com"/>
            </label>
            <label>Password: 
              <input type="password" 
                      required 
                      className="w-full" 
                      name="password" 
                      id="password"
                      placeholder="more than 6 letters"
                      onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <label>Password: 
              <input type="password" 
                      required 
                      className="w-full" 
                      name="password-verify" 
                      id="password-veryfy"
                      placeholder="same as arriba ^"
                      onChange={(e)=>setPassVer(e.target.value)}/>
            </label>
            <label htmlFor=""> Shift:
              <input type="radio" name="shift" id="day" value={"Day"}/> Day
              <input type="radio" name="shift" id="nigth" value={"Nigth"} /> Nigth
            </label>
            {//if valid is true show the submit button
            valid && <button className='btn self-center'>submit</button>
          }</form>
          <span className="font-light text-xs">Ya tienes cuenta? <Link href={"/login"} className="text-blue-700">Log In</Link> </span>
        </div>
      </div>
    </section>
  )
}

export default Signup