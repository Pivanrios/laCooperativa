//components
import OrderForCustomer from '@/src/components/OrderForm/OrderForCustomer'
//react
import React from 'react'
//functions
import { getDishes } from '@/src/lib/crud'

async function OrderPage() {
  const dishes = await getDishes();
  return (
    <div>OrderPage
        <OrderForCustomer dishes={dishes}/>
    </div>
  )
}

export default OrderPage