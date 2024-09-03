import React from 'react'
//components
import AllDishes from '@/src/components/DishSection/AllDishes';

function Platillos() {

  return (
    <div className='flex flex-col items-center px-3 py-5 bg-yellow-500 gap-2'>
        <AllDishes title={"Platillos"}/>
    </div>
  )
}

export default Platillos