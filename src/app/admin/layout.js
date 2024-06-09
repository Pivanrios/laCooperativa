import Navbar from '@/src/components/Navbar'
import React from 'react'



function AdminLayout({children}) {
  return (
    <div className=''>
        <Navbar/>
        <main className='flex container w-full'>
        {children}
        </main>
    </div>
  )
}

export default AdminLayout