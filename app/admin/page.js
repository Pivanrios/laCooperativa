import React from 'react'
import { orders } from '@/public/data'

function Admin() {
  return (
    <div className='w-full'>
      <section className='py-10 px-14 w-full'>
      <h2 className=''>Orders</h2>
      <table className='bg-slate-200'>
        <thead className='bg-slate-300'>
          <th>ID</th>
          <th>Customer</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total</th>
        </thead>
        {orders.map((o)=>{
          return(
            <tr className=''>
                <td>{o.id}</td>
                <td>{o.name}</td>
                <td>{o.product}</td>
                <td>{o.qty}</td>
                <td>${o.total}.00</td>
            </tr>
          )})}
      </table>
      </section>
    </div>
  )
}

export default Admin