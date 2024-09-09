//components
import CustomerConfirmation from '@/src/components/OrderConfirmation/CustomerConfirmation'
import React from 'react'
//functions
import { getOrderById } from '@/src/lib/orders'

async function OrderIdPage({params}) {
    //get order
    const order = await getOrderById(params.orderId)
  return (
    <> 
    <CustomerConfirmation order={order}/>
    </>
  )
}

export default OrderIdPage