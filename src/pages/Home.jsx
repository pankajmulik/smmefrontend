import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/data';
import Carousel from '../component/carousel/Carousel';
import 'swiper/css';
import Loader from '../component/loader/Loader';
import BrandCarousel from '../component/BrandCarousel'
import Card from '../component/card/Card';
import Navbar from '../component/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const navigate = useNavigate();
  const [productdata, setproductdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    fetch('https://shrimukundrajmobile.onrender.com/product/smm')
      .then(res => res.json())
      .then(json => setproductdata(json))
      .catch(error => console.error('Error fetching product data:', error));

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, []);

  console.log(productdata)

  const handleViewAllClick = () => {
    navigate('all-mobiles');
  };
  console.log(productdata)
  return (
    <div className='grid grid-flow-row grid-rows-12  h-auto w-screen my-10 pt-4 '> {/* Added padding-top */}

      {/* {isLoading ? <Loader /> : */}
        <div>

        <Navbar></Navbar>

        <div className='flex mt-4 sm:mx-16  md:mx-[10%] lg:mx-[10%] justify-center text-center   border-black border-2'>

          <input type="text" name="search-bar" id="search-bar"  placeholder='mobiles,headphines ' className='w-full px-8 border-none'/>

          <FontAwesomeIcon icon={ faSearch} className='sm:m-auto md:mx-2 lg:mx-2 xl:mx-2'/>
          
        </div>

        <div className='mx-auto my-2 h-auto'>
          <Carousel />
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 mt-8 text-center'>
          {data.mobilePhones.slice(0, 4).map((mobile) => (
            <div className='bg-white shadow-md rounded-lg overflow-hidden' key={mobile.name}>
              <div className="p-2">
                <h3 className="text-lg font-semibold">{mobile.name}</h3>
              </div>
              <div className="p-2">
                <img src="/images/galaxya.jpg" alt={mobile.name} className="w-full h-48 object-fill" />
              </div>
              <div className="p-2">
                <p className="text-gray-600">Price: {mobile.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" text-center mt-4">
          <button onClick={handleViewAllClick} className="bg-blue-600 text-white py-2 px-4 rounded">
            View All
          </button>
        </div>


        <div className='w-screen grid grid-rows-1 my-5'>
          <BrandCarousel />
        </div>



      

          <div className='grid '>
            Best Deals on Mobiles
            <div>

             
            </div>
          </div>

          <div className='grid sm:grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-10 mx-auto gap-6'>

            <div>
              <Card className='my-4'


                title="Tabs"
                image="/images/prod/tab.jpg"
                description="This is a sample description for the card."

              />
            </div>

            <div>
              <Card className='my-4'


                title="Mobiles"
                image="/images/prod/mobiles.jpg"
                description="This is a sample description for the card."


              />

            </div>

            <div>
              <Card className='my-4'


                title="Accessories"
                image="/images/prod/acc.jpg"
                description="This is a sample description for the card."

              />

            </div>






          </div>
        
      </div>
      {/* } */}

    </div>



  );


};

export default Home;
