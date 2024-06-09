import React from 'react'
//components
import DishGallery from '@/src/components/DishSection/DishGallery';

function Platillos() {

  return (
    <div className='flex flex-col items-center px-3 py-5 bg-yellow-500 gap-2'>
        <DishGallery title={'Platillos'}/>
    </div>
  )
}

export default Platillos