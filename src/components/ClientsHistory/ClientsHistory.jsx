"use client"
import { useAuth } from '@/src/context/AuthContext'
import { getCustomerOrders } from '@/src/lib/orders';

import React, { useEffect, useState } from 'react'

function ClientsHistory() {
  //set states
    let [history, setHistory] = useState([]);
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
        } catch (error) {
          console.log(error);
        }
      }
      setData();
      console.log("History:",history)
    },[])

  return (
    <>
    <div className='flex flex-col'> 
      <h4>History</h4>
      {history.map((o)=>(<span className='bg-slate-400 hover:bg-slate-200'>{o.orderId}  status</span>))}
    </div>
    </>
  )
}

export default ClientsHistory