import React from 'react'
import Navbar from './components/navbar'


function AdminLayout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default AdminLayout