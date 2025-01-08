import Image from 'next/image'
import React from 'react'

function SchedulePage() {
  return (
    <div>
        <h3>Schedule</h3>
        <div>
          <Image src={'/images/enero2025.png'} height={200} width={2000}/>
        </div>
    </div>
  )
}

export default SchedulePage