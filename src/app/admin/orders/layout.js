import OrderMenu from '@/src/components/OrderMenu/OrderMenu'
import React from 'react'

function OrdersLayout({children}) {
  return (
    <div className='flex flex-row'>
        <OrderMenu/>
        {children}
    </div>
  )
}

export default OrdersLayout