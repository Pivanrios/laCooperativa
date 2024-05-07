import Link from "next/link";


export default function Navbar() {
  return (
    <header className="">
        <nav className=" bg-slate-200 gap-2 flex flex-row justify-center">
            <Link href={"/admin"} className="">Orders</Link>
            <Link href={"/admin/products"}>Products</Link>
            <Link href={"/admin/customers"}>Customers</Link>
            <Link href={"/admin/sales"}>Sales</Link>
        </nav>
    </header>
  )
}
