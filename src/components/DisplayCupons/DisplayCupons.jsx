'use client'
//react hooks
import { useEffect, useState } from 'react'
//components
import CuponCard from './Cupon/CuponCard'
import { getCupons } from '@/src/lib/cupons';

function DisplayCupons() {
  //state
  const [cupons, setCupons] = useState([]);
  //
  useEffect(()=>{
    const setData = async ()=>{
      const res = await getCupons();
      setCupons(res);
    }
    setData();//invoke function
  },[]);

  return (
    <div>
        {cupons.map((cupon)=>(
            <CuponCard cupon={cupon}/>
        ))}
    </div>
  )
}

export default DisplayCupons