import React from "react";
import { useNavigate } from "react-router-dom";


const SuccessSignupUser = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Signup Successful!</h1>
                <p className="text-gray-600 mb-6">
                    Congratulations! Your account has been created successfully.
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                    onClick={handleRedirect}
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
};

export default SuccessSignupUser;