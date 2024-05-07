'use client'

import React from 'react'

function RegisterForm() {
  return (
    <section className='container flex flex-col items-center gap-1 bg-yellow-400 p-2' >
      <div id='register-wrapper'
          className='container flex flex-col items-center py-5 px-2'>
        <h3 className='text-2xl font-bold'>Register</h3>
        <p> Register with your email to receive cupons with discounts and add reviews to the dishes.. </p>
        <form action="" className='container flex flex-col p-3 gap-1' id='register-form'>
          <label htmlFor="">Email: <input type='text' /> </label>
          <label>Password: <input type="text" /></label>
          <button className='btn'>submit</button>
        </form>
      </div>
    </section>
  )
}

export default RegisterForm