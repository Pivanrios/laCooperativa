'use client'
import { getDish } from '@/src/lib/crud';
import Image from 'next/image'
import { useEffect, useState } from 'react';

function SingleProduct({dishId}) {
  const [dish, setDish] = useState({});
  //-------
  useEffect(()=>{
    const setData = async ()=>{
      try {
        console.log("setting data...")
        const res = await getDish(dishId);
        console.log("setting ingredientes",res.ingredientes);
        setDish(res);
        console.log("succesfully set data")
      } catch (error) {
        console.error(error);
      }
    };
    setData();
  },[]);
  return (
    <div className='flex flex-col items-center '>
        <h2 className='text-3xl font-bold'>{dish.name}</h2>
        <span className='flex  flex-col md:flex-row gap-2 items-center'>
            <Image src={dish.imagen} alt={dish.name} width={250} height={400} className=' rounded-xl'/>
            <div className='flex flex-col gap-2'>
                <p><strong>Description: </strong><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus
                     explicabo eaque exercitationem illo voluptatibus obcaecati fuga odit? Doloribus 
                     officia maiores at dolor earum odio tempore id praesentium suscipit expedita?</p>
                <p><strong>Complemento:</strong></p>
                <p><strong>Price:</strong>${dish.price}.00</p>
            </div>
        </span>
    </div>
  )
}

export default SingleProduct