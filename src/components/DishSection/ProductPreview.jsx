import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function ProductPreview({d}) {
  return (
      <Link href={`/platillos/${d.id}`}>
        <div id="item-prev" className='container bg-yellow-400 flex  sm:flex-col items-center flex-row gap-1 p-3'>
            <Image src={d.imagen} alt={d.name} width={20} height={20} />
            <ol className='container flex flex-col justify-between'>
              <h4 className='text-lg font-bold '>{d.name}</h4>
              <p className='self-end'>${d.price}.00</p>
            </ol>
        </div>
      </Link>
  )
}

export default ProductPreview