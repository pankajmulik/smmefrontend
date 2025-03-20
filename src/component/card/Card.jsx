import React from 'react';

const Card = ({ title, image, description }) => {
    return (
        <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-2 text-center">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                   Buy Now
                </button>
            </div>
        </div>
    );
};

export default Card;
