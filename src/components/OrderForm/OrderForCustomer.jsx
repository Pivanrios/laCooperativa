'use client'
import { useAuth } from '@/src/context/AuthContext';
import { getDishes } from '@/src/lib/crud'
import { addOrder } from '@/src/lib/orders';
import React, { useEffect, useState } from 'react'

function OrderForCustomer() {
    //get user info (name, acumulation, shift)
    const {currentUser} = useAuth();
    console.log("current user:", currentUser)
    //add states
    const [dishes, setDishes] = useState([]);
    //get dishes available
    useEffect(()=>{
        const setData = async ()=>{
            try{
                const res = await getDishes();
                setDishes(res);
            }catch{
                console.log(error);
            }
        }
        setData();
    },[])
    
    
  return (
    <>
    <form action={addOrder} className='flex flex-col gap-1'>
        <h3>Order for user</h3>
        <label htmlFor="">For:
            <input type="text" 
                    name='customer' 
                    id='username' 
                    value={currentUser.displayName}/>
        </label>
        <label htmlFor="dish-select">Dish:
            <select name="dish" id="dish-select" required>
                <option value={""}>------select option------</option>
                {dishes.map((dish,i)=>(//add key to element
                    <option value={dish.name} key={i}>{dish.name} - ${dish.price}.00</option>
                ))}
            </select>
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
        <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default OrderForCustomer