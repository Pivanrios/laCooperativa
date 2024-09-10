'use client'
import { useAuth } from "@/src/context/AuthContext"
//next components
import Image from "next/image";
import Link from "next/link";

function UserInfo() {
    //user
    const {currentUser} = useAuth();
  return (
    <div className="flex flex-col">
        <Image src={currentUser.photoURL} alt={ `${currentUser.displayName}`} width={20} height={20}/>
        <label htmlFor="">UserName: {currentUser.displayName}</label>
        <label htmlFor="">Email: {currentUser.email}</label>
        <Link className="btn"
              href={`/profile/${currentUser.displayName}/history`}>History</Link>
    </div>
  )
}

export default UserInfo