'use client'
import { useAuth } from '@/src/context/AuthContext';
//functions
import { addOrder } from '@/src/lib/orders';
//react
import React, { useEffect, useState } from 'react'

function OrderForCustomer({dishes}) {
    //get user info (name, acumulation, shift)
    const {currentUser} = useAuth();
    //console.log("current user:", currentUser)
    //add states
    const [qty, setQty] = useState(0);
    const [dishSelected, setDishSelected] = useState("");
    const [total, setTotal] = useState(0);

    //calculate total
    useEffect(()=>{
        //find price
        if (dishSelected){//check for length
            const found = dishes.find((dish)=> dish.name === dishSelected)//takes a boolean value
            //setTotal (price * qty) * disc ++points
            setTotal(found.price*qty);

        }
    },[dishSelected, qty])
    //handle submit
    const handleSubmit = async (formData)=>{
        const userId = currentUser.uid
        addOrder(formData, userId);
    }

  return (
    <>
    <form action={handleSubmit} className='flex flex-col gap-1 font-bold'>
        <label htmlFor="">For:
            <input type="text" 
                    name='customer' 
                    id='username' 
                    value={currentUser.displayName}
                    required
                    readOnly/>
        </label>
        <label htmlFor="dish-select">Dish:
            <select name="dish" id="dish-select" 
                    onChange={(e)=>{setDishSelected(e.target.value)}//call use effect 
                    }required>
                <option value={""}>------select option------</option>
                {dishes.map((dish,i)=>(//add key to element
                    <option value={dish.name} key={i}>{dish.name} - ${dish.price}.00</option>
                ))}
            </select>
        </label>
        <label htmlFor="">Qty:
            <input type="number"
                    name='qty'
                    id='qty'
                    onChange={(e)=>{// condition value has to be +
                        setQty(e.target.value);
                        console.log("value change:",e.target.value)
                    }}                        
                    required/>
        </label>
        <label>Date:
            <input type="date" 
                    name="delivery" 
                    id="delivery" 
                    required/>
        </label>
        <label htmlFor="breakroom-select">Breakroom:
            <select name="breakroom" id="breakroom-select" required>
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
                    id="disc"/>
        </label>
        <label htmlFor="">Nota:
            <input type="text" name="note"/>
        </label>
        <label htmlFor="">Total:
            <input type="number" 
                    name="total" 
                    id="total" 
                    value={total}
                    required 
                    readOnly/>
        </label>
        <p>points:{total*10}</p>
        <input type="submit" value="Submit" readOnly className='btn'/>
    </form>
    </>
  )
}

export default OrderForCustomer