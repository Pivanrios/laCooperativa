import React from 'react'
import CuponCard from './Cupon/CuponCard'

function DisplayCupons({cupons}) {
  return (
    <div>
        {cupons.map((cupon)=>(
            <CuponCard cupon={cupon}/>
        ))}
    </div>
  )
}

export default DisplayCupons