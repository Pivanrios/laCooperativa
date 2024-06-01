'use client'

function RegisterForm() {
  return (
    <section className='container flex flex-col items-center gap-1 bg-yellow-400 p-2' >
      <div id='register-wrapper'
          className='container flex flex-col items-center py-5 px-2'>
        <h3 className='text-2xl font-bold'>Register</h3>
        <p> Register with your email to receive cupons with discounts and add reviews to our dishes. </p>
        <form action="" className='container flex flex-col p-3 gap-1' id='register-form'>
          <label>Email: <input type='text' required/> </label>
          <label>Password: <input type="text" required/></label>
          <label for='dropdown'>Company: 
            <select id="dropdown" name="dropdown"
                    className="w-32">
              <option value={'SAN3'}>SAN3</option>
              <option value={'SAN5'}>SAN5</option>
            </select>
          </label>
          <label> Turno: 
            <label>Day
              <input type="radio" name="shift" id="option1" value={'Day'}/>
            </label>
            <label>Nigth
              <input type="radio" name="shift" id="option2" value={'Nigth'}/>
            </label>
          </label>
          <button className='btn'>submit</button>
        </form>
      </div>
    </section>
  )
}

export default RegisterForm