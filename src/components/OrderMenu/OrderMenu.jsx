import Link from "next/link"


function OrderMenu() {
  return (
    <nav className="flex flex-row justify-between md:justify-start md:flex-col p-2 gap-2">
        <Link href={"/admin/orders/newOrder"} className="bg-slate-600 font-semibold text-white px-4 py-2 rounded-md">+</Link>
        <Link href={"/admin/orders"} className="bg-slate-600 px-4 py-2 rounded-md text-white font-extrabold">-</Link>
    </nav>
  )
}

export default OrderMenu