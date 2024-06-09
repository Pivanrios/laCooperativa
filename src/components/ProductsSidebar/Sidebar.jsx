import React from 'react'
import ListOfProducts from './ListOfProducts/ListOfProducts'

function Sidebar() {
  return (
    <div className=' w-64'>
        <h2>Products</h2>
        <button>add</button>
        <ListOfProducts/>
    </div>
  )
}

export default Sidebar