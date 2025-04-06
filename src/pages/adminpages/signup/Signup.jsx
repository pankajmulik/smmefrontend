import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Signup = () => {

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [verified, setVerified] = useState(false);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        role: 'Admin',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
        dob: ''

    });




    const [accessCode, setAccessCode] = useState('');

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
        if (!formData.mobileNumber) formErrors.mobileNumber = 'Mobile number is required';
        if (!formData.dob) formErrors.dob = 'Date of birth is required';


        if (formData.password.length < 8) formErrors.password = 'Password must be at least 8 characters long';
        if (formData.mobileNumber.length !== 10) formErrors.mobileNumber = 'Mobile number must be 10 digits long';

        return formErrors;
    };


    const validateAccessCode = async (accessCode) => {

        try {
            const response = await axios.post('http://localhost:8080/new/admin/santu/code/to/acess/code/verifycode', {
                accessCode: accessCode
            });
            if (response.data.success) {
                setVerified(true);


            }

        }
        catch (error) {
            setError(error.response.data.message);

        }
        finally {
            console.log('finally');
        }
    };

    const handleSubmit = async (e) => {
        setLoading(true);

        formData.mobileNumber = `+91${formData.mobileNumber}`;

        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Validate access code from database
        validateAccessCode(accessCode);

        // if (!isValidAccessCode) {
        //     setErrors({ accessCode: 'Invalid access code' });
        //     return;
        // }


        try {
            const response = await axios.post('http://localhost:8080/smm/santu/admin/signup', {

                role: formData.role,
                name: formData.name,
                email: formData.email,
                password: formData.password,
                mobilenumber: formData.mobileNumber,
                dob: formData.dob
            });
            if (response.data.success) {
                alert('Signup successful!');
                // Optionally, redirect to a success page or login page
                navigate('/sign/up/succes');
            } else {
                setErrors({msg: response.data.error });
            }
        } catch (error) {
            setErrors({ msg: error.response.data.error });
        } finally {
            setLoading(false);
        }



    };






    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6">Signup</h2>


            <div className="mb-4">
                <label className="block text-gray-700">Access Code</label>
                <input type="text" name="accessCode" value={formData.accessCode} onChange={(e) => {
                    setAccessCode(e.target.value)
                }} className="w-full px-3 py-2 border rounded-md" />
                {errors.accessCode && <span className="text-red-500 text-sm">{errors.accessCode}</span>}

                <div>
                    {verified && <p>Access code verified</p>

                    }
                </div>

            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    {errors.dob && (
                        <span className="text-red-500 text-sm">{errors.dob}</span>
                    )}
                </div>

                {/* <div className="mb-4">
                    <label className="block text-gray-700">Mobile Number</label>
                    <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    {errors.mobileNumber && <span className="text-red-500 text-sm">{errors.mobileNumber}</span>}
                </div> */}

                {/* {otpSent && (
                    <div className="mb-4">
                        <label className="block text-gray-700">OTP</label>
                        <input type="text" name="otp" value={formData.otp} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                    </div>
                )} */}


                <div>

                    <div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Mobile Number</label>
                            <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange
                            } className="w-full px-3 py-2 border rounded-md" />

                        </div>
                    </div>

                    {/* {step === 1 &&
                        <button onClick={() => { handleSendCode() }}>Send Verification Code</button>

                    } {errors.mobileNumber && <span className="text-red-500 text-sm">{errors.mobileNumber}</span>}
                    {step === 2 && (
                        <div>
                            <h2>Verify Phone Number</h2>
                            <input
                                type="text"
                                placeholder="Enter verification code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <button onClick={handleVerifyCode}>Verify Code</button>
                        </div>
                    )} */}
                    {error && <p>{error}</p>}
                </div>




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

            already have an account? <a href="/admin/santu" className="text-blue-500">Login</a>

        </div>
    );
};

export default Signup;