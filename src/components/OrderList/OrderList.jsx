'use client'
//authentication

import { getOrders, toPaid, deleteOrder } from "@/src/lib/orders";
//UseState hooks
import { useState, useEffect } from "react";
//
import Link from "next/link";
//function 
function OrderList() {
    //convert to state
    const [orders, setOrders] = useState([]);
    //useEffect
    useEffect(()=>{
      const setData = async ()=>{
        console.log("Inside use Effect..")
        try {
          let res = await getOrders();
          console.log(res);
          //sort orders by number
          res.sort((a,b)=>a.orderNum - b.orderNum);
          //set our state
          setOrders(res);
          console.log("orders set");
        } catch (error) {
          console.error
          console.log("Error has been found:",error);
        }
      }
      setData();//invoke
    },[])
    //handle paid function


  return (
    <section className="flex flex-col w-full">
      <span className=" justify-between">
        <button className="btn">Filter</button>
        <button className="btn">Sort</button>
      </span>
      <div className="w-full">
        <span className={`flex flex-row font-semibold gap-2 w-full justify-around`}>
          <p className="">Order</p>
          <p>Delivery Date</p>
          <p>Customer</p>
          <p>Platillo</p>
          <p>Qty</p>
          <p>Status</p>
          <p>Buttons</p>
        </span>
        <div>
        {orders.map((order)=>(
              <div className="flex flex-row p-1 gap-5 w-full justify-around" key={order.orderNum}>
                <Link href={`/admin/orders/newOrder/${order.id}`} 
                            className={`${(order.status == "paid"? "bg-green-700" : "bg-blue-800")} flex flex-row justify-between w-full`}>
                  <p>{order.orderNum}</p>
                  <p>{order.delivery}</p>
                  <p>{order.customer}</p>
                  <p>{order.dish}</p>
                  <p>{order.quantity}</p>
                  <p>{order.status}</p>
                </Link>
                <span>
                  <button className=" text-white bg-green-700 px-2 rounded-md hover:bg-green-500"
                          onClick={()=>{toPaid(order.id, order.points, order.userId)}}>$</button>
                  <button className="text-white bg-red-700 px-2 rounded-md hover:bg-red-500"
                          onClick={()=>{deleteOrder(order.id)}}
                          >X</button>
                </span>
                </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderList