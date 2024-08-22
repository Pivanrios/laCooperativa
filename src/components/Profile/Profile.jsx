'use client'
//authentication
import { useAuth } from "@/src/context/AuthContext"
import { getUserData } from "@/src/lib/signup";
import Link from "next/link";
import { useEffect, useState } from "react";

function Profile() {
    const {currentUser} = useAuth();
    console.log("User:");
    const [userInfo, setUserInfo] = useState([]);

    useEffect(()=>{
        const setData = async()=>{
          try {
            const res = await getUserData(currentUser.uid);
            console.log("user collection:", res)
            setUserInfo(res);
          } catch (error) {
            console.log(error);
          }
        }
        setData();
    },[]);
    

  return (
    <section>
        <h3>Profile</h3>
        <div className="flex flex-col gap-1">
            <strong>email:</strong>{currentUser.email}
            <strong>Username:</strong>{currentUser.displayName}
            <strong>Shift:</strong>{userInfo.shift}
            <Link href={"/update-profile"}/>
            <button>Log Out</button>
        </div>
    </section>
  )
}

export default Profile