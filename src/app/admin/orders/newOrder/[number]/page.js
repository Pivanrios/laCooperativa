import OrderConfirm from '@/src/components/OrderConfirmation/OrderConfirm'
import OrderReceipt from '@/src/components/OrderReceipt/OrderReceipt';
import { getOrderById, getOrders } from '@/src/lib/orders';
import React from 'react'

export default async function ConfirmationPage({params}) {
    console.log("params:",params.number);
    //get order
    //wait for resposne
    const res = await getOrderById(params.number);
    
  return (
    <div>
        {(res.status === "paid")? <OrderReceipt order={res}/> : <OrderConfirm order={res}/>}
        
    </div>
  )
}
