'use client'
//user Authentication react
import { useAuth } from '@/src/context/AuthContext'
//nextjs link
import Link from 'next/link'

//this menu is a list of account settings
function Navigation() {
    const {currentUser} = useAuth();
    const list = [
        {
            title:"Set Preferences",
            path: "preferences"
        }, 
        {
            title:"Reset Password",
            path:"password"
        },{
            title:"Set Allergies",
            path:"allergies"
        }]
  return (
    <nav className='flex flex-col gap-1'>
    {list.map((e)=>(
        <Link href={`/profile/${currentUser.displayName}/${e.path}`}>{e.title}</Link>
    ))}
    </nav>
  )
}

export default Navigation