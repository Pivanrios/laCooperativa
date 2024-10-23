import React from 'react'
//components
import ReviewForm from '@/src/components/Reviews/ReviewForm';
import SingleProduct from '@/src/components/SingleProduct/SingleProduct';
import DishGallery from '@/src/components/DishSection/DishGallery';
import ReviewsGallery from '@/src/components/Reviews/ReviewsGallery';
import Link from 'next/link';

async function Page({params}) {
  const login = false;
  //obtenemos el codigo dinamico
  
  return (
    <div className='flex flex-row justify-between px-3 md:px-10 bg-yellow-500 overflow-auto md:mx-14 gap-1'>      
      <div className='flex flex-col bg-yellow-400 p-10 gap-2'>
        <Link href={"/order"}
              className='btn'>Order</Link>
        <SingleProduct dishId={params.platillo}/>        
        <DishGallery title={'Related Dishes'}/>
        <ReviewForm productId={params.platillo}/>
        <ReviewsGallery productId={params.platillo}/>
      </div>
    </div>
  )
}

export default Page