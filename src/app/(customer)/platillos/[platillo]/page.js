
import React from 'react'
//components
import ReviewsGallery from '@/src/components/ReviewsGallery';
import ReviewForm from '@/src/components/ReviewForm';
//function
import { getDish } from '@/src/lib/crud';
import SingleProduct from '@/src/components/SingleProduct/SingleProduct';
import DishGallery from '@/src/components/DishSection/DishGallery';

async function Page({params}) {
  const login = false;
  //obtenemos el codigo dinamico
  
  //llamamos a nuestra base de datos
  const dish = await getDish(params.platillo);

  return (
    <div className='flex flex-row justify-between px-3 md:px-10 bg-yellow-500 overflow-auto md:mx-14 gap-1'>
      <button>D</button>
      <div className='flex flex-col bg-yellow-400 p-10 gap-2'>
        <SingleProduct dish={dish}/>
        {login && <ReviewForm/>}
        <ReviewsGallery/>
        <DishGallery title={'Related Dishes'}/>
      </div>
      <button>L</button>
    </div>
  )
}

export default Page