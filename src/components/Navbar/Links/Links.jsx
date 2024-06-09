'use client'
//react hook
import { useState } from "react"
//components
import Image from "next/image"
import LinkItem from "./LinkItem";
import Login from "../Login/Login";

const links = [
    {
        title:"About",
        path: '/about-us'
    },{
        title: "Home",
        path: '/'
    },{
        title: "Platillos",
        path: '/platillos'
    }
]

function Links() {
    //state
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="gap-1 hidden sm:flex sm:flex-row">
                {links.map((link)=>(
                    <LinkItem key={link.title} item={link} setOpen={setOpen}/>
                ))}
                <Login setOpen={setOpen}/>
            </div>
            <Image src={'/icons/MenuIcon.jpg'}
                    alt="menu"
                    width={30}
                    height={30}
                    onClick={()=>{setOpen(prev=>!prev)}}
                    className="sm:hidden cursor-pointer"/>
            {open && (
                <div className="sm:hidden menu flex flex-col absolute top-10 right-0 w-1/3 
                  items-center gap-2 bg-yellow-500 p-2">
                    {links.map((link)=>(
                        <LinkItem key={link.path} 
                                item={link} 
                                setOpen={setOpen}/>
                    ))}
                    <Login setOpen={setOpen}/>
                </div>
            )}
        </div>
    )
}

export default Links