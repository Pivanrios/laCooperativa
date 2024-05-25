import { getCupons } from '@/src/lib/cupons'
import Link from 'next/link';
import React from 'react'

async function CuponsPage() {
    const cupons = await getCupons();
    console.log("cupons:", cupons); 
  return (
    <div className='mx-20'>
        <h3>Cupons</h3>
        <Link href={'/admin/cupons/new'} className='bg-black text-white px-3 rounded-full'>Add</Link>
        {cupons.map((cupons)=>(
            <p>cupon</p>
        ))}
    </div>
    
  )
}

export default CuponsPage