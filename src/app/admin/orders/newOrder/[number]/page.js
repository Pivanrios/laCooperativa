import OrderConfirm from '@/src/components/OrderConfirmation/OrderConfirm'
import { getOrders } from '@/src/lib/orders';
import React from 'react'

export default async function ConfirmationPage({params}) {
    console.log("params:",params.number);
    //get orders
    const orders = await getOrders();
    console.log("Orders:", orders);
    //find order
    const order = orders.find(o => o.orderNum == params.number);
    console.log("Order:", order);
  return (
    <div>
        <OrderConfirm order={order}/>
    </div>
  )
}
