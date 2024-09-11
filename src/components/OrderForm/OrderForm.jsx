'use client'
//functions
import { addAdminOrder } from "@/src/lib/orders";
//react hooks
import React, { useEffect, useState } from "react";




function OrderForm({dishes}) {

    //STATES
    const [dish, setDish] = useState("");
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);

    //ON CHANCHE
    useEffect(()=>{
        const setData = async ()=>{
            try {
                if(dish){
                    const found = dishes.find((d)=> d.name === dish);
                    //set total
                    setTotal(found.price*qty);
                }
            } catch (error) {
             console.log(error);   
            }
        };
        setData();
    },[dish, qty]);
    //ON SUBMIT
    const handleSubmit = (formData)=>{
        
        addAdminOrder(formData);
        alert("order submited");
    }

    return (
    <>
    <form action={handleSubmit} className="flex flex-col m-1">
        <label htmlFor="">Customer:
            <input type="text" 
                    name="customer" 
                    id="customer" />
        </label>
        <label htmlFor="">Delivery Date:
            <input type="date" 
                    name="delivery" 
                    id="dalivery" />
        </label>
        {//use select element to chose dish and breakroom. 
        }<label htmlFor="dish-select">Dish:
            <select name="dish" id="dish-select" required
                onChange={(e)=>{setDish(e.target.value)}}>
                <option value={""}>------select option------</option>
                {dishes.map((dish,i)=>(//add key to element
                    <option value={dish.name} key={i}>{dish.name} - ${dish.price}.00</option>
                ))}
            </select>
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
        </label>{
            //add buttons +   -  
        }<label htmlFor="">Quantity:
            <input type="number"
                    name="qty"
                    id="quantity"
                    placeholder="0"
                    onChange={(e)=>{setQty(e.target.value)}} />
        </label>
        <label htmlFor="">Discount:
            <input type="text"
                    name="disc"
                    id="disc" />
        </label>
        <label htmlFor="">Nota:
            <input type="text" name="note"/>
        </label>
        <label>Total:
            <input type="number" name="total" value={total}/>
        </label>
       
        <button className="btn h-10 sm:h-8">Submit</button>
    </form>
    </>
  )
}

export default OrderForm