import React from 'react'
//components
import ReviewsGallery from '@/src/components/ReviewsGallery';
import ReviewForm from '@/src/components/ReviewForm';
import SingleProduct from '@/src/components/SingleProduct/SingleProduct';
import DishGallery from '@/src/components/DishSection/DishGallery';

async function Page({params}) {
  const login = false;
  //obtenemos el codigo dinamico
  
  return (
    <div className='flex flex-row justify-between px-3 md:px-10 bg-yellow-500 overflow-auto md:mx-14 gap-1'>      
      <div className='flex flex-col bg-yellow-400 p-10 gap-2'>
        <SingleProduct dishId={params.platillo}/>
        {login && <ReviewForm/>}
        <ReviewsGallery/>
        <DishGallery title={'Related Dishes'}/>
      </div>
    </div>
  )
}

export default Page