import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <section className='container bg-yellow-500 px-3 py-2'>
        <div className='flex flex-col items-center py-3 gap-5'>
            <h3 className='text-2xl font-bold'>Contact us</h3>
            <div className=' flex flex-row gap-3 '>
                <Link href={"https://www.instagram.com/dessertvibesmg?igsh=MWk3eDN0b3VrczRibQ=="}>
                <Image src={"/icons/instagram.png"} 
                        alt='instagram' 
                        width={30} 
                        height={30}
                        className='rounded-lg'/>
                </Link>
                <Link href='https://chat.whatsapp.com/I5vg82rHUSj3EUFToM6gtq'>
                <Image src={"/icons/Whatsapp.png"} 
                      alt='whatsapp' width={30} 
                      height={30}
                      className='rounded-xl'/>
                </Link>
                <Link href='https://www.linkedin.com/in/pivanrios/'>
                <Image src={"/icons/linkedin.png"} 
                        alt='linkedin' 
                        width={30} 
                        height={30}
                        className='rounded-lg'/>
                </Link>
            </div>
            <span className='font-gray opacity-20 text-xs'>copy right © laCooperativa all rights reserved</span>
        </div>
    </section>
  )
}

export default Footer