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
    <div className='grid grid-flow-row   h-auto w-screen my-10  '> {/* Added padding-top */}

      <div className='mb-4'>
        <Navbar></Navbar>
      </div>



      <div className='flex sm:w-full bg-white  md:mx-auto sm:mx-[20%]   md:w-80 h-8 my-6 justify-center text-center   border-black border-2'>

        <input type="text" name="search-bar" id="search-bar" placeholder='mobiles,headphines ' className='w-full px-8 outline-none' />

        <FontAwesomeIcon icon={faSearch} className='sm:m-auto md:mx-2 lg:mx-2 xl:mx-2 p-2' />

      </div>

      <div className='mx-auto my-2 h-86 bg-red '>
        <Carousel />
      </div>


      <div className='grid sm:grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-10 mx-auto gap-6'>
        <div onClick={() => navigate('/mobiles')} className="cursor-pointer">
          <Card
            className='my-4'
            title="Best Deals on Mobiles"
            image="/images/prod/mobiles.jpg"
            description="Explore the best deals on mobiles."
          />
        </div>

        <div onClick={() => navigate('/headphones')} className="cursor-pointer">
          <Card
            className='my-4'
            title="Best Deals on Headphones"
            image="/images/prod/headphones.jpg"
            description="Discover amazing offers on headphones."
          />
        </div>

        <div onClick={() => navigate('/smartwatches')} className="cursor-pointer">
          <Card
            className='my-4'
            title="Best Deals on Smartwatches"
            image="/images/prod/smartwatches.jpg"
            description="Find the best deals on smartwatches."
          />
        </div>

        <div onClick={() => navigate('/electronics')} className="cursor-pointer">
          <Card
            className='my-4'
            title="Best Deals on Electronics"
            image="/images/prod/electronics.jpg"
            description="Shop for the best deals on electronics."
          />
        </div>
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





      <div className='w-screen grid grid-rows-1 '>
        <BrandCarousel />
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




  );


};

export default Home;
