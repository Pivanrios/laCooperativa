'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function CustomerNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
        <div className='container flex flex-row  justify-between px-5 py-2 bg-yellow-500'>
            <span>LaCooperativa</span>
            <nav className='flex flex-row gap-1'>
                <Link href={"/customer/about-us"}
                      className='hidden sm:list-item'>About</Link>
                <Link href={"/customer"}
                      className='hidden sm:list-item'>Home</Link>
                <Link href={"/customer/platillos"}
                      className='hidden sm:list-item'>Platillos</Link>
            </nav>
            <div className='burger sm:hidden'
                  onClick={()=>{setOpen(!open)}}>
              <div>-</div>
              <div>-</div>
            </div>
            {open && (
              <div className='sm:hidden menu flex flex-col absolute bg-yellow-500 p-2'>
                <Link href={"/customer/about-us"}
                      className=''>About</Link>
                <Link href={"/customer"}
                      className=''>Home</Link>
                <Link href={"/customer/platillos"}
                      className=''>Platillos</Link>
              </div>
            )

            }
        </div>
    </header>
  )
}

export default CustomerNavbar