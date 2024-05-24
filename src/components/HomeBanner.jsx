import Link from 'next/link'
import React from 'react'

function HomeBanner() {
  return (
    <div>
      <div id="banner" className='container flex flex-col px-2 pt-3 pb-5 md:px-10 md:py-10 bg-yellow-400 justify-between' >
        <h1 className='container flex flex-col p-2'>
          <b className='text-3xl md:text-6xl'>LaCooperativa</b>
          <span className='text-xs md:text-md text-gray-500'>Comida casera at your service</span>
        </h1>
        <p className='px-2 pt-3 pb-10 self-end text-xs md:text-lg '>Preparamos un menu semanal dentro de amazon para empleados que no tienen tiempo de cocinar... </p>
        <Link href="/about-us" className='btn flex self-end justify-center content-center '>Learn more</Link>   
      </div>
    </div>
  )
}

export default HomeBanner