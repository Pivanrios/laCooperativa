"use client"
import { useAuth } from '@/src/context/AuthContext'
import { getCusOrders } from '@/src/lib/orders';
import Link from 'next/link';

import React, { useEffect, useState } from 'react'

function ClientsHistory() {
  //set states
    const [history, setHistory] = useState([]);
    const [load, setLoad] = useState(false);
    const {currentUser} = useAuth();
    //set data
    useEffect(()=>{
      const setData = async ()=>{
        console.log("setting data..")
        const userId = currentUser.uid;
        const orders = []
        try {
          console.log("User req:")//call our data base
          const res = await getCusOrders(userId);
          console.log("RESPONSE:", res.length)
          if (history.length == 0){//condition
            res.forEach((e)=>{history.push(e)})
          }
          setLoad(true);
        } catch (error) {
          console.log(error);
        }
      }
      setData();
      console.log("History:")
    },[])

  return (
    <>
    <h4>History</h4>
    <div className='flex flex-col'> 
      <span className='flex flex-row justify-around'>
        <h4>ID</h4>
        <h4>DISH</h4>
        <h4>DELIVERY</h4>
        <h4>STATUS</h4>
      </span>
      <ol>
      {load && history.map((o,i)=>(
        <span key={`element${i}`}>
          <Link href={`/order/${o.id}`} 
                                        className={`${(o.status == "paid")?"bg-green-800":"bg-blue-700"} hover:bg-slate-200 flex flex-row justify-around `}
                                        >
                                          <span>{o.orderNum}</span>
                                          <span>{o.dish}</span>
                                          <span>{o.delivery}</span>
                                          <span>{o.status}</span></Link>
        </span>                                
      ))}
      </ol>
    </div>
    </>
  )
}

export default ClientsHistory