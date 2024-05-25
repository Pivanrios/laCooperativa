import Image from 'next/image'
import React from 'react'

function SingleProduct({dish}) {
  return (
    <div className='flex flex-col items-center '>
        <h2 className='text-3xl font-bold'>{dish.name}</h2>
        <span className='flex  flex-col md:flex-row gap-2 items-center'>
            <Image src={dish.imagen} alt={dish.name} width={250} height={400} className=' rounded-xl'/>
            <div className='flex flex-col gap-2'>
                <p><strong>Description: </strong><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus
                     explicabo eaque exercitationem illo voluptatibus obcaecati fuga odit? Doloribus 
                     officia maiores at dolor earum odio tempore id praesentium suscipit expedita?</p>
                <ul><strong>Ingredintes:</strong>
                    {dish.ingredientes.map((e)=>(<li className=' list-disc mx-7'>{e}</li>))}
                </ul>
                <p>Price: ${dish.price}.00</p>
            </div>
        </span>
    </div>
  )
}

export default SingleProduct