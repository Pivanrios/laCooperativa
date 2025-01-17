import Link from "next/link";


export default function Navbar() {
  return (
    <header className="flex flex-row justify-between bg-slate-400">
      <div/>
        <nav className=" gap-2 flex flex-row justify-center">
            <Link href={"/admin/orders"} className="">Orders</Link>
            <Link href={"/admin/products"}>Products</Link>
            <Link href={"/admin/customers"}>Customers</Link>
            <Link href={"/admin/sales"}>Sales</Link>
            <Link href={'/admin/cupons'}>Cupons</Link>
        </nav>
        <Link href={"/"}>back</Link>
    </header>
  )
}
