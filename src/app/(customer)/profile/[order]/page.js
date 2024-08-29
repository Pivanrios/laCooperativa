//Components----------------------
import CustomerConfirmation from '@/src/components/OrderConfirmation/CustomerConfirmation'
import OrderReceipt from '@/src/components/OrderReceipt/OrderReceipt'
//API CALL FUCNTION--------------------
import { getOrderById } from '@/src/lib/orders'
//REACT -----------------
import React from 'react'

//client order
async function OrderPage({params}) {
  //get order data
  const order = await getOrderById(params.order);
  //render according to status of the order
  return (
    <div className='flex justify-center'>
      {(order.status === "confirm")? <CustomerConfirmation order={order}/>:<OrderReceipt order={order}/>}
    </div>
  )
}

export default OrderPage