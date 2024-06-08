
import Link from 'next/link'
import Image from 'next/image';
import Links from './Links/Links';

function CustomerNavbar() {
  return (
    <header>
        <div className='container flex flex-row  justify-between px-5 py-2 bg-yellow-500'>
            <Link href={"/"}><span className='font-bold flex flex-row gap-1 items-center'>
                                    <Image src={'/icons/logo.png'}
                                    width={30}
                                    height={30}
                                    className='hidden sm:list-item rounded-full'/>
                                    LaCooperativa
                              </span>
            </Link>
            <Links/>
        </div>
    </header>
  )
}

export default CustomerNavbar