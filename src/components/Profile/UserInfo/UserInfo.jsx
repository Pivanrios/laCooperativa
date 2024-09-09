'use client'
import { useAuth } from "@/src/context/AuthContext"
import Image from "next/image";

function UserInfo() {
    //user
    const {currentUser} = useAuth();
  return (
    <div className="flex flex-col">
        <Image src={"/"} alt={ `${currentUser.displayName}`} width={20} height={20}/>
        <label htmlFor="">UserName: {currentUser.displayName}</label>
        <label htmlFor="">Email: {currentUser.email}</label>
    </div>
  )
}

export default UserInfo