"use client"
import { useAuth } from '@/src/context/AuthContext'
import { getCustomerOrders } from '@/src/lib/orders';
import React from 'react'

function ClientsHistory() {
    const {currentUser} = useAuth();
    getCustomerOrders(currentUser.uid);
  return (
    <div>ClientsHistory</div>
  )
}

export default ClientsHistory