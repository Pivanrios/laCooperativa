
import React from 'react'
//components
import ReviewsGallery from '@/src/components/ReviewsGallery';
import ReviewForm from '@/src/components/ReviewForm';
//function
import { getDish } from '@/src/lib/crud';

async function Page({params}) {
  const login = false;
  //obtenemos el codigo dinamico
  
  //llamamos a nuestra base de datos
  const dish = await getDish(params.platillo);
  console.log("dish", dish)

  return (
    <div className='flex flex-row justify-between px-3 md:px-10 bg-yellow-500 overflow-auto'>
      <button>D</button>
      <div className='flex flex-col bg-yellow-400 p-10'>
        <h3 className='text-2xl md:text-4xl font-bold'>{params.platillo}</h3>
        
        
        <ReviewsGallery/>
        {login && (
          <>
          <ReviewForm/>
          </>
        )}
      </div>
      <button>L</button>
    </div>
  )
}

export default Page