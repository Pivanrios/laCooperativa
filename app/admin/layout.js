import React from 'react'
import Navbar from '../components/navbar'


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