//components
import CustomerConfirmation from '@/src/components/OrderConfirmation/CustomerConfirmation'
import React from 'react'
//functions
import { getOrderById } from '@/src/lib/orders'
import OrderReceipt from '@/src/components/OrderReceipt/OrderReceipt';


async function OrderIdPage({params}) {
    //get order
    const order = await getOrderById(params.orderId);
  return (
    <> 
    {(order.status == "confirm") && (<CustomerConfirmation order={order}/>)}
    {(order.status == "paid") && (<OrderReceipt order={order}/>)}
    </>
  )
}

export default OrderIdPage