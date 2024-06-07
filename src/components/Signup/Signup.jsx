
import { signUpUser } from "@/src/lib/signup"

function Signup() {
  
  return (
    <section className='container flex flex-col items-center gap-1 p-2' >
      <div id='register-wrapper'
          className='container flex flex-col items-center py-5 px-2'>
        <h3 className='text-2xl font-bold'>SignUp</h3>
        <p className=" "> Register with your email to receive cupons with discounts and add reviews to our dishes. </p>
        <div>
          <form action={signUpUser} className='container flex flex-col p-3 gap-1' id='register-form'>
            <label>Username: <input type="text" name="username" id="username" required className="w-full"/> </label>
            <label>Email: <input type='text' required className="w-full" name="email"/> </label>
            <label>Password: <input type="password" required className="w-full" name="password"/></label>
            <label for='dropdown'>Company: 
              <select id="dropdown" name="company"
                      className="w-full ">
                <option value={'SAN3'} name='company'>SAN3</option>
                <option value={'SAN5'} name='company'>SAN5</option>
              </select>
            </label>
            <label for="shift" className=" flex flex-col justify-between"> Turno:
              <span className="flex gap-5">                  
                <label>Day
                  <input type="radio" name="shift" id="option1" value={'Day'}/>
                </label>
                <label>Nigth
                  <input type="radio" name="shift" id="option2" value={'Nigth'}/>
                </label>
              </span>
            </label>
            <button className='btn self-center'>submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Signup