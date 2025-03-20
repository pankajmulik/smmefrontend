// AdminLogin.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../signup/Signup';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, seterror] = useState('');
    const [userdata, setuserdata] = useState([])
    const navigate = useNavigate();
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    // const validateEmail = (value) => {
    //     userdata.map((user) => {
    //         try {
    //             if (user.email === value) {
    //                 return true
    //             }
    //         }
    //         catch (error) {
    //             return false
    //         }
    //     })

    // };

    // const validatePassword = (value) => {
    //     userdata.map((user) => {
    //         try {
    //             if (user.password === value) {
    //                 return true
    //             }
    //             return false
    //         } catch (error) {
    //             return false
    //         }
    //     })
    // };

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    };


    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }



    useEffect(() => {

    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        seterror('');

        try {
            const response = await axios.post('http://localhost:8080/smm/santu/admin/login', {
                email: email,
                password: password,

            })
            if (response.data.success) {
                const { token, user } = response.data;
                localStorage.setItem('authToken', token);
                console.log('Login successful:', user);

                setTimeout(() => {
                    navigate('/admin/santu/home');
                }
                    , 2000);
            } else {
                seterror(response.data.error);
            }
        } catch (error) {
            seterror({ error: error.message });
        } finally {
            setLoading(false);
        }


    };

    return (
        <div className='w-full h-auto mx-auto grid'>



            <div className='my-10'>
                <p className='text-center text-4xl text-teal-950'>
                    Shri Mukundraj Mobile Shpee <br /> Login Page
                </p>
                <p className='text-center m-4'>
                    Please fill in the details to sign in
                </p>
                <div className="grid my-10 loginform w-80 p-3 m-auto rounded-md shadow-lg bg-slate-300">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="mb-5">
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`w-full rounded border p-3 shadow mt-2 outline-none text-neutral-800 ${error ? 'border-red-500' : 'border-gray-300'}`}
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />

                            </label>
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-5" />
                            <span>Password</span>

                            <div className="relative w-full mt-2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    className={`w-full rounded border p-3 shadow pr-10 outline-none text-neutral-800 ${error ? 'border-red-500' : 'border-gray-300'}`}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter your password"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={toggleShowPassword}>
                                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                                </span>
                            </div>






                        </div>

                        <div className='text-center'>

                            <button type="submit" className='text-center bg-slate-500 text-white p-2 rounded-md mt-5'>

                                Log In
                            </button>
                        </div>
                        {error && (
                            <div className="mt-2 text-center">
                                <p className="text-red-500">{error}</p>
                                <button
                                    className="text-blue-500 underline"
                                    onClick={() => navigate('/forgot-password')}
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                    </form>





                    don't have an account? <span onClick={() => {
                        navigate('signup')
                    }}>
                        signup</span>
                </div>
            </div>

        </div>
    );
}

export default AdminLogin;
