import { addCupon } from '@/src/lib/cupons'
import React from 'react'

function AddCupon() {
    
  return (
    <section>
        <h3>Add Cupon</h3>
        <form action={addCupon} className='flex flex-col gap-1'>
            <label htmlFor="code">Code:
                <input type='text'
                        name='code'/>
            </label>
            <label>Amount:
                <input type='text'
                        name='amount'/>
            </label>
            <strong>Type:</strong>
            <span className='flex flex-row gap-1'>
                <label htmlFor="">Percent
                    <input type="radio" name="type" id="percent" value="percent" />
                </label>
                <label>Fixed
                    <input type="radio"  name="type" id="fixed" value="fixed"/>
                </label>
            </span>
            <label>
                <input type="date" name="exp" id="exp" />
            </label>
            <button>submit</button>
        </form>
    </section>
  )
}

export default AddCupon