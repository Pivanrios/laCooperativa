import { getOrders } from "@/src/lib/orders"


async function OrderList() {
    const orders = await getOrders();
  return (
    <section className="flex flex-col w-full">
      <span className=" justify-between">
        <button className="btn">Filter</button>
        <button className="btn">Sort</button>
      </span>
      <div className="w-full">
        <span className="flex flex-row font-semibold">
          <p>Order</p>
          <p>Delivery Date</p>
          <p>Customer</p>
          <p>Platillo</p>
          <p>Qty</p>
        </span>
        <div>
        {orders.map((order)=>(
              <div className="flex flex-row p-1">
                <p>{order.orderNum}</p>
                <p>{order.delivery}</p>
                <p>{order.customer}</p>
                <p>{order.dish}</p>
                <p>{order.quantity}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderList