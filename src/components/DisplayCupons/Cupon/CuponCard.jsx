import React from 'react'

function CuponCard({cupon}) {
    console.log("cupon:", cupon);
  return (
    <div className='card bg-slate-600'>
        <div className='wrapper'>
            <div className='content'>
                <h4>Code: {cupon.code}</h4> 
                <p>Exp</p>
                <p>Amount:{cupon.amount}</p>
            </div>
        </div>
    </div>
  )
}

export default CuponCard