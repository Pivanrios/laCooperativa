'use client'
//firebase
import { auth } from '@/firebaseconfig';
import { signOut } from 'firebase/auth';
//context
import { useAuth } from '@/src/context/AuthContext';
//nextJs
import Link from 'next/link';
//reactHooks
import React, { useState } from 'react'



function UserLink() {
    //state
    const [open, setOpen] = useState(false);
    const {currentUser} = useAuth();
    //logput
    const logOut = ()=>{
        console.log("Logging out...");
        //sign Out
        signOut(auth);   
    }

  return (
    <>
    {!currentUser && (<Link href={"/login"} className='px-3 bg-green-700 text-white rounded-full'>Login</Link>)}
    {currentUser && (
        <div>
            {!open && (<>
            <button onClick={()=>setOpen(!open)} className='px-3 bg-blue-700 text-white rounded-full'>{currentUser.displayName}</button>
            </>)}
            {open && (<>
            <button onClick={()=>setOpen(!open)} className='px-3 bg-blue-700 text-white rounded-full'>{currentUser.displayName}</button>
            <div className='flex flex-col gap-1 bg-yellow-600 my-1 absolute'>
                <Link href={"/order"} className='hover:bg-slate-400 px-2'>Order Now</Link>
                <Link href={"/profile"} className='hover:bg-slate-400 px-2'>Profile</Link>
                <button type="button" 
                        onClick={logOut}
                        className='px-3 bg-red-800 text-white rounded-full'>Log out</button>
            </div>
            </>)}
        </div>)}
    
    </>
  )
}

export default UserLink