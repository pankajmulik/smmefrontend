import React, { useState } from 'react';
import navitems from '../data/navdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [shownav, setshownav] = useState(false);

  const toggleMenu = () => {
    setshownav(!shownav);
  };

  return (
    <div className="bg-zinc-700 text-white fixed top-0 left-0 w-full z-50">
      {/* Header */}
      <div className="grid grid-cols-2 items-center h-16 px-4">
        <div className="flex">
          <img src="/images/shrimukund.jpg" alt="Logo-Sm-mobiles" className="h-14 w-15 object-cover" />
          <span className="mx-2 px-2 text-center my-auto hidden md:grid lg:grid xl:grid text-white">
            <h2 className='font-extrabold  lg:text-lg font-serif'>
              Shri Mukundraj Mobiles
            </h2>
          </span>

          <span className=' mx-2 px-2 text-center my-auto italic font-bold sm:grid md:hidden lg:hidden xl:hidden text-slate-950'>
SM Mobiles
          </span>

        </div>
        <div className="text-right">
          {/* Bars Icon for Small Screens */}
          <button onClick={toggleMenu} className="md:hidden">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:flex justify-end space-x-4">
            {navitems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="hover:text-gray-300"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div className={`fixed inset-0 z-50 transform ${shownav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
        {/* Sidebar Content */}
        <div className="relative w-64 h-full bg-slate-800">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <div className="mt-16">
            {navitems.map((item) => (
              <div key={item.path} className="px-6 py-4">
                <NavLink
                  to={item.path}
                  className="block hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
