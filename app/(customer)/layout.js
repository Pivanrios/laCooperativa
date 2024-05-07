import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "../components/Footer";
import CustomerNavbar from "../components/CustomerNavbar";

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
