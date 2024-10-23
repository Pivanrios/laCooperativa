'use client'
//function to register user on db
import { signUpUser } from "@/src/lib/signup"
import Image from "next/image";
import Link from "next/link";
//react hooks
import { useEffect, useState } from "react"

function Signup() {
  //add some states
  const [password, setPassword] = useState(""); //password
  const [passVer, setPassVer] = useState(""); //password verification
  const [valid, setValid] = useState(false); // bool that allows to continue
  const [good, setGood] = useState(false);
  //use effect
  useEffect(()=>{
    //check if password is longer than 6 digits
    (password.length >  6)? setGood(true) : setGood(false);
    //verify if passwords are the same
    (password == passVer && passVer.length > 0)? setValid(true) : setValid(false);
  },[passVer, password]);
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
            <label><span className="flex flex-row">Password: { good && <Image src={"/icons/greenmark.jpg"}
                                              alt="icon"
                                              width={15}
                                              height={1}
                                              className=" rounded-full"/>}</span>
              <input type="password" 
                      required 
                      className="w-full" 
                      name="password" 
                      id="password"
                      placeholder="more than 6 letters"
                      onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <label> <span className="flex flex-row">Password: {valid &&  <Image src={"/icons/greenmark.jpg"}
                                              alt="icon"
                                              width={15}
                                              height={1}
                                              className=" rounded-full"/>}</span>
              <input type="password" 
                      required 
                      className="w-full" 
                      name="password-verify" 
                      id="password-veryfy"
                      placeholder="confirmar contrasena"
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