'use client'
import { useAuth } from "@/src/context/AuthContext"
import { getUserData } from "@/src/lib/crud";
//next components
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function UserInfo() {
    const [role, setRole] = useState(null)
    //user
    const {currentUser} = useAuth();
    useEffect(()=>{
      const setData = async ()=>{
        try {
          const res = await getUserData(currentUser.uid);
          setRole(res.role);
        } catch (error) {
          console.log(error);
        }
      }
      setData();
    },[])
  return (
    <>
      {(role === "chef")?(
        <>
          <Link href={"/"}>Products</Link>
        </>
      ):(
        <div className="flex flex-col">
          <Image src={currentUser.photoURL} alt={ `${currentUser.displayName}`} width={20} height={20}/>
          <label htmlFor="">UserName: {currentUser.displayName}</label>
          <label htmlFor="">Email: {currentUser.email}</label>
          <Link className="btn"
                href={`/profile/${currentUser.displayName}/history`}>History</Link>
        </div>
      )}
      
    </>
  )
}

export default UserInfo