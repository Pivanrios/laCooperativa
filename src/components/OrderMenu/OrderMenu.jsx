import Link from "next/link"


function OrderMenu() {
  return (
    <nav className="flex flex-row justify-between md:justify-center md:flex-col p-2 gap-2">
        <Link href={"/admin/orders/newOrder"}>Add Order</Link>
        <Link href={"/admin/orders"}>View Orders</Link>
    </nav>
  )
}

export default OrderMenu