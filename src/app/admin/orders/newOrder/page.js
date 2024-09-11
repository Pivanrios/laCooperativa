//components
import OrderForm from '@/src/components/OrderForm/OrderForm'
//fucntions
import { getDishes } from '@/src/lib/crud'
//react
import React from 'react'



async function NewOrderPage() {
    const dishes = await getDishes();
  return (
    <div>
        <OrderForm dishes={dishes}/>
    </div>
  )
}

export default NewOrderPage