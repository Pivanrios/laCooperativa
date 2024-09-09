import Link from 'next/link'
import React from 'react'

function Navigation() {
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
        <Link href={`/profile/${e.path}`}>{e.title}</Link>
    ))}
    </nav>
  )
}

export default Navigation