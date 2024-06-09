'use client'
//componetns
import ProductPreview from './ProductPreview'
import Link from 'next/link' //Link to send to other page
//function
import { getDishes } from '@/src/lib/crud';
import { useEffect, useState } from 'react';

function DishGallery({title}) {
  const [dishes, setDishes] = useState([]);
  useEffect(()=>{
    const setData = async ()=>{
      try {
        const res = await getDishes();
        setDishes(res);
      } catch (error) {
        console.error(error);
      }
    };
    setData();//invoke function
  },[]);
  return (
    <section className='container flex flex-col items-center bg-yellow-500 py-3 px-2 md:py-5 px-10 gap-1'>{//this is the section were we display our dishes 
      }<h3 className='text-3xl font-bold'>{title}</h3>
      <div className='container flex sm:flex-row flex-col gap-2 justify-between sm:overflow-x-scroll no-scrollbar sm:whitespace-nowrap '>
      {dishes.map((d)=>{//we map to our dishes and render product component sending the information via prop
        return <ProductPreview d={d} key={d.id}/>
      })}
      </div>
      <Link href={"/platillos"} className='self-end'>mas-----</Link>
    </section>
  )
}

export default DishGallery