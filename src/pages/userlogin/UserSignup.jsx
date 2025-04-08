import React, { useState } from 'react'
import axios, { formToJSON } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const UserSignup = () => {
  const [confirmpass, setconfirmpass] = useState('')
  const [loading, setLoading] = useState(false);
  const [errors, seterror] = useState(null)
  const navigate = useNavigate()
  const [formdata, setformdata] = useState({
    role: 'customer',
    name: "",
    email: "",
    password: "",

    mobilenumber: "",
    dob: "",

  })

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }


  const handleconfirmPass = (e) => {
    setconfirmpass(e.target.value)
   
  }



  const validateForm = () => {
    let formErrors = {};

    if (!formdata.name) formErrors.name = 'Name is required';
    if (!formdata.email) formErrors.email = 'Email is required';
    if (!formdata.password) formErrors.password = 'Password is required';
    if (formdata.password !== confirmpass) formErrors.confirmPassword = 'Passwords do not match';
    if (!formdata.mobilenumber) formErrors.mobileNumber = 'Mobile number is required';
    if (!formdata.dob) formErrors.dob = 'Date of birth is required';

    if (formdata.password.length < 8) formErrors.password = 'Password must be at least 8 characters long';
    if (formdata.mobilenumber.length !== 10) formErrors.mobileNumber = 'Mobile number must be 10 digits long';

    seterror(formErrors);
    return formErrors;
  };




  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setLoading(false);
      return;
    }
   

    console.log(formdata)

    try {

      const response = await axios.post("http://localhost:8080/smm/customer/register/new/user", {
        role: formdata.role,
        name: formdata.name,
        email: formdata.email,
        password: formdata.password,
        mobilenumber: formdata.mobilenumber,
        dob: formdata.dob
      },)

      if (response.data.success) {
        alert('Signup successful!');
        // Optionally, redirect to a success page or login page
        navigate('/signup/success');
      } else {
        seterror({ msg: response.data.error });
      }

    } catch (error) {
      seterror(error.response.data.message)
      setLoading(false)
      alert(error.response.data.message)
    }
  }

  return (
    <div className='grid  w-full h-auto text-center m-auto justify-center'>

      <div className="grid grid-flow-row w-full ">

        <div className='text-slate-950 text-3xl '>
          Signup
        </div>

        <div className="grid grid-flow-row gap-4 text-center w-full h-auto bg-white p-3 shadow-md shadow-black rounded my-10">

          <form onSubmit={handleSubmit}>

           

            <div className=" flex my-2 ">
              <div className="emaildiv mx-auto w-40">
                <label htmlFor="email">Email:</label>
              </div>

              <div className='w-full mx-auto '>
                <input type="text" name="email" placeholder='Enter your email' className='w-full h-10 border-2 text-black border-slate-950 rounded-md' onChange={handleChange} />
              </div>
              
            </div>

            {errors && errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {errors.email}
              </div>
            )}

            <div className="flex my-2">
              <div className="name mx-auto w-40">
                <label htmlFor="name">Name:</label>
              </div>
              <div className="name w-full mx-auto">
                <input type="text" name="name" placeholder='Enter your name' onChange={handleChange} className='w-full h-10 border-2 text-black border-slate-950 rounded-md' />
              </div>
           
            </div>

            {errors && errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {errors.name}
              </div>
            )}

            <div className="flex my-2">
              <div className="password w-40 mx-auto ">
                <label htmlFor="password">Password:</label>
              </div>
              <div className="password w-full mx-auto">
                <input type="password" name="password" placeholder='Enter your password' onChange={handleChange} className='w-full h-10 border-2 text-black border-slate-950 rounded-md' />
              </div>
             
            </div>

            {errors && errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {errors.password}
              </div>
            )}

            <div className="flex">
              <div className="confirmpassword w-40 mx-auto">
                <label htmlFor="confirmpassword">
                  Confirm Password
                </label>
              </div>
              <div className="confirmpassword w-full mx-auto">
                <input type="password" name="confirmpassword" id="confirmpassword" onChange={handleconfirmPass} className='w-full h-10 border-2 text-black border-slate-950 rounded-md' placeholder='Confirm Password' />
              </div>
           
            </div>

            {errors && errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </div>
            )}

            <div className="flex mt-4">
              <div className="phone w-40 mx-auto">
                <label htmlFor="mobilenumber">Phone:</label>
              </div>
              <div className="phone w-full mx-auto">
                <input type="text" name="mobilenumber" id="mobilenumber" onChange={handleChange} className='w-full h-10 border-2 text-black border-slate-950 rounded-md' placeholder='Enter your phone number' />
              </div>
           
            </div>

            {errors && errors.mobileNumber && (
              <div className="text-red-500 text-sm mt-1">
                {errors.mobileNumber}
              </div>
            )}

            <div className="flex mt-4">
              <div className="dob w-40 mx-auto">
                <label htmlFor="dob">Date of Birth:</label>
              </div>
              <div className="dob w-full mx-auto">
                <input type="date" name="dob" id="dob" value={formdata.dob} onChange={handleChange} className='w-full h-10 border-2 text-black border-slate-950 rounded-md' placeholder='Enter your date of birth' />
              </div>
            
            </div>

            {errors && errors.dob && (
              <div className="text-red-500 text-sm mt-1">
                {errors.dob}
              </div>
            )}

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md" >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  <span className="ml-2">Loading...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default UserSignup