import React from 'react'
import restaurant from '../assets/images/restaurant-img.jpg'
import logo from '../assets/images/logo.png'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import { useState } from 'react'
const Auth = () => {

  const [isRegister , setIsRegister] = useState(false);
  return (
    <div className='flex min-h-screen w-full'>
      {/* left section */}
      <div
        className='w-1/2 relative flex items-center justify-center bg-cover bg-center'
        style={{ backgroundImage: `url(${restaurant})` }}
      >
        {/* Black Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>


        {/* Quote */}
        <blockquote className='absolute bottom-10 px-8 mb-10 text-2xl italic text-white'>
          "Messi is better than Ronaldo"
          <br />
          <span className='block mt-4 text-yellow-400'>-Founder of Restro</span>
        </blockquote>
      </div>

      {/* right section */}
      <div className='w-1/2 min-h-screen bg-[#1a1a1a] p-10'>
        <div className='flex flex-col items-center gap-2'>
          <img src={logo} alt="Restro logo" className='h-14 w-14 border-2 rounded-full p-1' />
          <h1 className='text-lg font-semibold text-[#f5f5f5] tracking-wide'>Welcome to Restro</h1>
        </div>
        <h2 className='text-4xl text-center mt-10 font-semibold text-yellow-300 mb-10'>
          {isRegister ? "Employee Registration ": "Employee Login"}
        </h2>

        {/* components  */}
        {isRegister ? <Register/>:<Login/>}

  

        <div className='flex justify-center mt-6'>
          <p className='text-sm text-[#ababab]'>
            {isRegister ? "Already have an account?":"Don't have an account ?"}
            <a onClick={() => setIsRegister(!isRegister)} className='text-yellow-400 font-semibold hover:underline' href="#">{isRegister ? "Sign In":"Sign Up"}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth
