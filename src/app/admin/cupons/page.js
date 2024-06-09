
import Link from 'next/link';
import React from 'react'

async function CuponsPage() {
   
  return (
    <div className='mx-20'>
        <h3>Cupons</h3>
        <Link href={'/admin/cupons/new'} className='bg-black text-white px-3 rounded-full'>Add</Link>
    </div>
    
  )
}

export default CuponsPage