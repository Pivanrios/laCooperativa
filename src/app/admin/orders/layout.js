import OrderMenu from '@/src/components/OrderMenu/OrderMenu'
import React from 'react'

function OrdersLayout({children}) {
  return (
    <div className='flex flex-col md:flex-row'>
        <OrderMenu/>
        {children}
    </div>
  )
}

export default OrdersLayout