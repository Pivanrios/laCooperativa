import { Inter } from "next/font/google";
import "./globals.css";
//components

import Footer from "@/src/components/Footer";
import CustomerNavbar from "@/src/components/Navbar/CustomerNavbar";

const inter = Inter({ subsets: ["latin"] });


export default function CustomerLayout({ children }) {
  return (
    <div className="root">
      <div className="container flex flex-col">
        <CustomerNavbar/>
        <main>{children}</main>
        <Footer/>
      </div>
    </div>
  );
}
