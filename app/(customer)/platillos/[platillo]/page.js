'use client'
import React, { useState } from 'react'
import { platillo } from '@/public/data'
import ReviewsGallery from '@/app/components/ReviewsGallery';
import ReviewForm from '@/app/components/ReviewForm';


function Page({params}) {
  const [login, setLogin] = useState(true);
  //obtenemos el codigo dinamico
 
  //llamamos a nuestra base de datos


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