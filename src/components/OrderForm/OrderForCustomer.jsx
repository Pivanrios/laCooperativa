import React from 'react'

function OrderForCustomer() {
    //get user info (name, acumulation, shift)
    //get dishes available
    
  return (
    <>
    <form action="" className='flex flex-col gap-1'>
        <h3>Order for user</h3>
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
        <label htmlFor="breakroom-select">Breakroom:
            <select name="breakroom" id="breakroom-select">
                <option value="Main">Main - Norte</option>
                <option value="Shipdock">Shipdock - Sur</option>
                <option value="Singles">Singles - Este</option>
                <option value="Decant">Decant - Oeste</option>
                <option value="Pick">Pick - 2nd floor</option>
                <option value="Stow">Stow - 2nd floor</option>
            </select>
        </label>
        <label htmlFor="">Discount:
            <input type="text"
                    name="disc"
                    id="disc" />
        </label>
        <label htmlFor="">Nota:
            <input type="text" name="note"/>
        </label>
        <p><strong>Total:</strong></p>
        <input type="button" value="Submit" />
    </form>
    </>
  )
}

export default OrderForCustomer