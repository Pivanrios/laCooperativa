import React from 'react'
import { dishes } from '@/public/data'
import ProductPreview from '@/app/components/ProductPreview'

function Platillos() {
  return (
    <div className='flex flex-col items-center px-3 py-5 bg-yellow-500 gap-2'>
        <h2 className='text-4xl font-bold'>Platillos</h2>
        <div className='flex flex-col lg:flex-row gap-2'>
            {dishes.map((dish)=>{
                return <ProductPreview d={dish}/>
            })}
        </div>
    </div>
  )
}

export default Platillos