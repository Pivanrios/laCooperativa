import React from 'react'

function Preferences() {
  return (
    <div className='flex flex-col p-1 '>
        <h3 className='font-bold'>Set Preferences</h3>
        <form action="">
            <label htmlFor="">Shift:
                <input type="radio" name="shift" id="day" value={"dat"} /> Day
                <input type="radio" name="shift" id="nigth"  value={"night"}/>Nigth
            </label>
        </form>

    </div>
  )
}

export default Preferences