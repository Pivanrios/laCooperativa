import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CartaPage
() {
  return (
    <div className='flex flex-col '>
        <Link href={"/order"}
                className='btn'>Order</Link>
        <Image src={"/images/Weeklyplan.png"} 
                width={400} 
                height={400} 
                alt='la carta'/>

    </div>
  )
}

export default CartaPage
