"use client"
import { useAuth } from '@/src/context/AuthContext'
import { getCustomerOrders } from '@/src/lib/orders';
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
          const res = await getCustomerOrders(userId);
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
      <span>ID | status</span>
      {load && history.map((o)=>(<Link href={`/profile/${o.orderId}`} 
                                        className='bg-slate-400 hover:bg-slate-200 '
                                        key={o.orderId}>{o.number}  {o.status}</Link>))}
    </div>
    </>
  )
}

export default ClientsHistory