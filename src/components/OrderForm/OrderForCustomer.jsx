import React from 'react'

function OrderForCustomer() {
  return (
    <>
    <form action="">
        <h3>Order</h3>
        <label >Dish:
            <input type="text" 
                    name='dish'
                    id='dish'/>
        </label>
        <label htmlFor="">Qty:
            <input type="number"
                    name='qty'
                    id='qty'/>
        </label>
        <label>Date:
            <input type="date" 
                    name="delivery" 
                    id="delivery" />
        </label>
        <input type="button" value="Submit" />
    </form>
    </>
  )
}

export default OrderForCustomer