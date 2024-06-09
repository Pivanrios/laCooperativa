//functions
import { getDishes } from '@/src/lib/crud'
//components
import Delete from './Buttons/Delete';
import Link from 'next/link';

async function ListOfProducts() {
    //our states
    const dishes = await getDishes();

    return (
        <div className='w-full flex flex-col border-solid border-black gap-1'>
            {dishes.map((dish)=>(
                <Link   href={`/admin/products/${dish.name}`}
                        className=' text-white flex flex-row w-full justify-between cursor-pointer 
                px-2 '
                        key={dish.name}>
                    <p>{dish.name}</p>
                    <Delete/>
                </Link>
            ))}
        </div>
    )
}

export default ListOfProducts