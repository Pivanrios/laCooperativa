
import Sidebar from '@/src/components/ProductsSidebar/Sidebar'
import React from 'react'

function Productslayout({children}) {
  return (
    <div className='flex flex-col sm:flex-row '>
        <Sidebar />
        <div className='w-1/3'>{children}</div>
    </div>
  )
}

export default Productslayout