"use client"

//nextjs components
import Link from 'next/link';
import { usePathname } from 'next/navigation';
//reach hooks
import { useState } from 'react';
import { useAuth } from '@/src/context/AuthContext';
//firebase
import { auth } from '@/firebaseconfig';
import { signOut } from 'firebase/auth';

function UserBtn() {
    //add states
    const admin = false;
    const [open, setOpen] = useState(false);
    //user loggin?
    const {currentUser} = useAuth();
    //check wich route are we
    const path = usePathname();
    //handleLogout
    const logOut = ()=>{
        console.log("Logging out")
        //sign out
        signOut(auth);
    }


  return (
    <div>
        {!currentUser && (<Link href={"/login"} className='btn'>Order Now</Link>)}
        {currentUser && (
            <>
            <span className=' rounded-full bg-green-900 hover:bg-green-700 text-white py-1 px-2'
                    onClick={()=>{(path=="/order" || path=="/profile")? console.log("on ->", path):setOpen(open => !open)}}
                    >{currentUser.displayName}
            </span>
            {open && (
                <div className={`${(path==="/order" || path==="/profile")?"hidden":""} flex flex-col bg-yellow-500 absolute gap-1 right-0`}>
                    <Link href={"/profile"}
                            onClick={()=>{setOpen(false)}}
                            className='hover:bg-yellow-400 p-1'>Profile</Link>
                    <Link href={"/order"}
                            onClick={()=>setOpen(false)}
                            className='hover:bg-yellow-400 p-1'>Order Now</Link>
                    <button onClick={logOut}
                        className='btn'>Sign Out</button>
                </div>
            )}
            </>
        )}
        {admin && (
            <>
            </>
        )

        }
    </div>
  )
}

export default UserBtn