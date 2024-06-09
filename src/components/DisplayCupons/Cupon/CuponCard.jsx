
function CuponCard({cupon}) {
    //console.log("cupon:", cupon);
  return (
    <div className='card bg-slate-600 w-52 h-72'>
        <div className='wrapper flex flex-col '>
            <div className='content p-2 flex flex-col items-center'>
                <h4 className='font-bold'>Code: {cupon.code}</h4> 
                <p>Exp: {cupon.exp}</p>
                <p>Amount:{`${(cupon.type=="percent")? "":"$"}`}{cupon.amount}{`${(cupon.type=="fixed")? ".00":"%"}`}</p>
            </div>
            <button className='btn self-center'>use</button>
        </div>
    </div>
  )
}

export default CuponCard