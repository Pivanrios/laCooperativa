'use client'
//components 
import Link from "next/link"
//functions
import { usePathname } from "next/navigation"

function LinkItem({item, setOpen}) {
    //get route to check for active
    const path = usePathname();
    return (
        <Link   href={item.path}
                className={`hover:bg-blue-700 hover:text-white px-3 rounded-full forced-colors:appearance-auto
                    ${ path===item.path ? "hidden": ""}`}
                id="link-item"
                onClick={()=>setOpen(false)}>
        {item.title}
        </Link>
    )
}

export default LinkItem