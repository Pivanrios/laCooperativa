import Link from "next/link";


export default function Navbar() {
  return (
    <header className="">
        <nav className="">
            <Link href={"/orders"}>Orders</Link>
            <Link href={"products"}>Products</Link>
            <Link href={"/customers"}>Customers</Link>
            <Link href={"/sales"}>Sales</Link>
        </nav>
    </header>
  )
}
