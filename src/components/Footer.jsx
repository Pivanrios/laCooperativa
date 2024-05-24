import React from 'react'

function Footer() {
  return (
    <section className='container bg-yellow-500 px-3 py-2'>
        <div className='flex flex-col items-center py-3 gap-5'>
            <h3 className='text-2xl font-bold'>Contact us</h3>
            <div className=' flex flex-row gap-3 '>
                <a href='https://www.instagram.com/dessertvibesmg?igsh=MWk3eDN0b3VrczRibQ=='><div id='instagram'></div></a>
                <a href='https://chat.whatsapp.com/I5vg82rHUSj3EUFToM6gtq'><div id='whatsapp'></div></a>
                <a href='https://www.linkedin.com/in/pivanrios/'><div id='linkedin'></div></a>
            </div>
            <span className='font-gray opacity-20'>copy right © laCooperativa all rights reserved</span>
        </div>
    </section>
  )
}

export default Footer