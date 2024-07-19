import OrderForm from '@/src/components/OrderForm/OrderForm'
import OrderList from '@/src/components/OrderList/OrderList'
import React from 'react'


function Admin() {
  return (
    <div className='w-full'>
      <OrderForm/>
      <OrderList/>
    </div>
  )
}

export default Admin