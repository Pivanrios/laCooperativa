import { getOrders } from "@/src/lib/orders"


async function OrderList() {
    const orders = await getOrders();
  return (
    <section>
        {orders.map((order)=>(
            <div className="flex flex-row">
            <p>{order.delivery}</p><p>{order.customer}</p><p>{order.dish}</p><p>{order.quantity}</p>
            </div>
        ))}
    </section>
  )
}

export default OrderList