import CustomerConfirmation from '@/src/components/OrderConfirmation/CustomerConfirmation'
import React from 'react'
//client order

function OrderPage({params}) {
  //get order data

  return (
    <div>
      <CustomerConfirmation id={params.order}/>
    </div>
  )
}

export default OrderPage