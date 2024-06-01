'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Login from './Login/Login';
import Image from 'next/image';

function CustomerNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
        <div className='container flex flex-row  justify-between px-5 py-2 bg-yellow-500'>
            <span>LaCooperativa</span>
            <nav className='sm:flex sm:flex-row gap-1 hidden'>
                <Link href={"/about-us"}
                      className=''>About</Link>
                <Link href={"/"}
                      className=''>Home</Link>
                <Link href={"/platillos"}
                      className=''>Platillos</Link>
                  <Login />
            </nav>
            <Image src={'/icons/MenuIcon.jpg'} alt='menu' 
                  width={27} 
                  height={20}
                  className='rounded-md sm:hidden'
                  onClick={()=>{setOpen(!open)}}/>
            {open && (
              <div className='sm:hidden menu flex flex-col absolute top-10 right-0 w-1/3 
                  items-center gap-2 bg-yellow-500 p-2'>
                <Link href={"/about-us"}
                      className=''>About</Link>
                <Link href={"/"}
                      className=''>Home</Link>
                <Link href={"/platillos"}
                      className=''>Platillos</Link>
                  <Login/>
              </div>
            )

            }
        </div>
    </header>
  )
}

export default CustomerNavbar