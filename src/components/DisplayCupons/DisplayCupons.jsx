'use client'
//react hooks
import { useEffect, useState } from 'react'
//components
import CuponCard from './Cupon/CuponCard'
//function
import { getCupons } from '@/src/lib/cupons';

function DisplayCupons() {
  //state
  const [cupons, setCupons] = useState([]);
  //set cupones
  useEffect(()=>{
    const setData = async ()=>{
      const res = await getCupons();
      setCupons(res);
    }
    setData();//invoke function
  },[]);

  return (
    <div className='flex flex-col  sm:flex-row gap-1 justify-center items-center'>
        {cupons.map((cupon)=>(
            <CuponCard cupon={cupon}/>
        ))}
    </div>
  )
}

export default DisplayCupons