import { Inter } from "next/font/google";
import "./globals.css";
//componentss
import Footer from "@/src/components/Footer";
import CustomerNavbar from "@/src/components/Navbar/CustomerNavbar";
//context
import { AuthProvider } from "@/src/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function CustomerLayout({ children }) {
  return (
    <div className="root">
      <div className="container flex flex-col">
        <AuthProvider>
          <CustomerNavbar/>
          <main>{children}</main>
          <Footer/>
        </AuthProvider>
      </div>
    </div>
  );
}
