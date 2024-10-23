import { useState } from "react";
import Link from "next/link";

function Menu() {
    const [open, setOpen] = useState(false);

    const openDropdown = ()=>{
        setOpen(()=>!open);
    }

  return (
    <div>
        <button
            onClick={openDropdown}
            className="">
            Menu
        </button>
        {open && (
            <>
                <div className="flex flex-col absolute bg-yellow-500">
                    <Link href={"/carta"}
                    onClick={openDropdown}
                            className="hover:bg-white">La Carta</Link>
                    <Link href={"/schedule"}
                            onClick={openDropdown}
                            className="hover:bg-white">Calendario</Link>
                    <Link href={"/platillos"}
                            onClick={openDropdown}
                            className="hover:bg-white">Platillos</Link>
                </div>
            </>
        )}
    </div>
  )
}

export default Menu