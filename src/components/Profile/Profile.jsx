'use client'
//authentication
import { useAuth } from "@/src/context/AuthContext"
import Link from "next/link";

function Profile() {
    const {currentUser} = useAuth();

  return (
    <section>
        <h3>Profile</h3>
        <div className="flex flex-col gap-1">
            <strong>email:</strong>{currentUser.email}
            <strong>Username:</strong>{currentUser.displayName}
            <Link href={"/update-profile"}/>
            <button>Log Out</button>
        </div>
    </section>
  )
}

export default Profile