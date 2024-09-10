import { Inter } from "next/font/google";
import "./globals.css";
//componentss
import Footer from "@/src/components/Footer/Footer";
import CustomerNavbar from "@/src/components/Navbar/CustomerNavbar";
//context



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
