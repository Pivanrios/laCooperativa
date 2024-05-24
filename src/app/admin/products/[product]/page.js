import React from 'react'

function Product({params}) {
  return (
    <div className='w-1/3'>{params.product}</div>
  )
}

export default Product