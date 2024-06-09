'use client'
//react hooks
import { useEffect, useState } from 'react'
//components
import CuponCard from './Cupon/CuponCard'
//functions
import { getCupons } from '@/src/lib/cupons';
import { useAuth } from '@/src/context/AuthContext';
import Link from 'next/link';

function DisplayCupons() {
  //state & variables
  const [cupons, setCupons] = useState([]);
  const {currentUser} = useAuth();

  //set cupones
  useEffect(()=>{
    const setData = async ()=>{
      const res = await getCupons();
      setCupons(res);
    }
    setData();
  },[]);

  return (
    <>
      {currentUser && <div className='flex flex-col  sm:flex-row gap-1 justify-center items-center'>
          {cupons.map((cupon)=>(
              <CuponCard cupon={cupon}/>
          ))}
      </div>}{
        !currentUser && <div className='p-3 flex flex-col items-center'>
          <p>Login to see cupons</p>
          <Link href={'/login'} className='btn'>Login</Link>
        </div>
      }
    </>
  )
}

export default DisplayCupons