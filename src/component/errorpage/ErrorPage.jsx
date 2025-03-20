import React from 'react'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-500 to-red-400 text-white">
            <h1 className="text-9xl font-bold animate-bounce">404</h1>
            <p className="mt-4 text-xl">Oops! The page you're looking for doesn't exist.</p>
            <a
                href="/"
                className="mt-6 bg-white text-pink-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
                Go Home
            </a>
        </div>
    );
};

export default ErrorPage