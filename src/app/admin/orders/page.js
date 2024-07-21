import OrderList from '@/src/components/OrderList/OrderList'
import React from 'react'

function OrdersPage() {
  return (
    <section className='m-2'>
        <h1>Orders</h1>
        <OrderList/>
    </section>
  )
}

export default OrdersPage