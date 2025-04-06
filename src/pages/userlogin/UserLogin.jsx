import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'

const UserLogin = () => {


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   if(!validatinformation(email, password)){
    return
   }

try {
  

  const res = axios.post('http://localhost:8080/api/v1/user/login', {
    email: email,
    password: password,
    role:'customer'
  })

  if (res.data.success) {
    seterror('')
    localStorage.setItem('user', JSON.stringify(res.data.user))
    localStorage.setItem('token', res.data.token)
    window.location.href = '/userdashboard'
  }
  else {
    seterror(res.data.message)
  }


} catch (error) {
  console.log(error)
  
}

  }

  const validatinformation = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, at least one letter and one number  
   
    if (!emailRegex.test(email)) {
      seterror('Please enter a valid email address')
    }
    else if (!passwordRegex.test(password)) {
      seterror('Password must be at least 8 characters long and contain at least one letter and one number')
    }
    if (email === '') {
      seterror('Please enter your email')
      return false
      
    } else if (password === '') {
      seterror('Please enter your password')
      return false
    } else {
      seterror('')
      return true
    }
    

  }

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setemail(value)
    } else if (name === 'password') {
      setpassword(value)
    }
  }





  return (
    <div className='w-full h-auto text-center grid-flow-row mt-20  text-white'>
      <div className="grid m-auto p-5 bg-slate-950 text-center md:w-[50%] lg:w-[50%] xl-w-[50%]  shadow-lg rounded-md shadow-black">



        <div className="grid m-4">
          <h2 className=' text-3xl font-sans font-weight-bold'>
            Login
          </h2>
        </div>
        <div className="grid text-center">

          <div>
            <p className='text-slate-300 text-sm my-3'>
              Please fill in the details to sign in
            </p>  
          </div>

          <div>
            {
              error && <p className='text-red-500 text-sm'>{error}</p>
            }
          </div>

          <form onSubmit={handleSubmit}>

            <div className="grid grid-flow-row gap-4 ">
              <div className='flex w-full '>
                <div className='grid mx-4 w-40 text-center'>

                  <label htmlFor="email">
                    Email:
                  </label>

                </div>
                <div className='flex w-full border-black border-2 text-black  rounded bg-white '>
                  <div className='grid w-full'>
                    <input type='text' name='email' placeholder='Enter your email' onChange={handlechange} className='w-full h-10   ' />

                  </div>
                
           
                </div>

              </div>

              <div className='flex w-full '>

                <div className='grid mx-4 w-40 text-center'>

                  <label htmlFor="password">
                  Password:
                  </label>

                </div>
                <div className='grid w-full'>
                  <input type={showPassword ? "text" : "password"} name='password' onChange={handlechange} placeholder='Enter your password' className='w-full h-10 border-2 text-black border-slate-950 rounded-md' />

                </div>
                

              </div>
              <div className='grid m-auto w-40'>
                <button className='w-full h-10 bg-blue-700 text-white rounded-md' type='submit'>Login</button>

              </div>
            
            </div>
          </form>
          <div className="mt-5 w-full  ">
            New User Please <a href="/signup" className='text-blue-500'>Signup</a> here
          </div>
        </div>
      
        <div className="grid"></div>

      </div>
    </div>
  )
}

export default UserLogin