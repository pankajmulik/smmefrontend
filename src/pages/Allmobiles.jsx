import React, { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import data from '../data/data';
import { useNavigate } from 'react-router-dom';


const AllMobiles = () => {

    
      const navigate = useNavigate();
      const [productdata, setproductdata] = useState([]);

 useEffect(() => {
     fetch('https://localhost:8080/product/smm')
      .then(res => res.json())
      .then(json => setproductdata(json))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

    return (
        <div className="pt-16"> {/* Added padding-top */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* {data.mobilePhones.map((mobile) => (
                    <div className="bg-white shadow-md rounded-lg overflow-hidden" key={mobile.name}>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{mobile.name}</h3>
                        </div>
                        <div className="p-4">
                            <img src="/images/galaxya.jpg" alt={mobile.name} className="w-full h-48 object-cover" />
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">Price: {mobile.price}</p>
                        </div>
                    </div>
                ))} */}

                {

                    
                  
                    
                }
            </div>
            <div className="text-center mt-4">
                <NavLink to="/" className="bg-blue-600 text-white py-2 px-4 rounded">
                    Back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default AllMobiles;
