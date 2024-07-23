import OrderConfirm from '@/src/components/OrderConfirmation/OrderConfirm'
import React from 'react'

export default function ConfirmationPage({params}) {
    console.log("params:",params.number);
  return (
    <div>ConfirmationPage
        <OrderConfirm/>
    </div>
  )
}
