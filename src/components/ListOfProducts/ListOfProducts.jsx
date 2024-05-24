//functions
import { getDishes } from '@/src/lib/crud'
import Delete from './Buttons/Delete';

async function ListOfProducts() {
    //our states
    const dishes = await getDishes();

    return (
        <div className='w-full flex flex-col gap-1 bg-slate-700'>
            {dishes.map((dish)=>(
                <span className=' text-white bg-slate-500 flex flex-row w-full justify-between'
                        key={dish.name}>
                    <p>{dish.name}</p>
                    <p>{dish.price}</p>
                    <Delete/>
                </span>
            ))}
        </div>
    )
}

export default ListOfProducts