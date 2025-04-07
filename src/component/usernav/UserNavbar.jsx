import React from 'react'
import { NavLink } from 'react-router-dom'

import UserProfile from '../../pages/userpages/UserProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const UserNavbar = () => {

    const udata = [
        { id: 1, name: 'Dashboard', icon: 'fa-solid fa-gauge', link: '/user-dashboard' },
        { id: 2, name: 'Mobiles', icon: 'fa-solid fa-gauge', link: '/mobiles' },
        { id: 3, name: 'Laptops', icon: 'fa-solid fa-laptop', link: '/laptops' },
        { id: 4, name: 'Smart Watches', icon: 'fa-solid fa-clock', link: '/smartwatches' },
        { id: 5, name: 'Electronics', icon: 'fa-solid fa-headphones-simple', link: '/electronics' },
    ];
    return (
        <div className="flex  gap-2 bg-gray-800 p-4 rounded-lg">
            {/* Loop through udata */}
            {udata.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.link}
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 rounded-md ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400'
                        } hover:text-white hover:bg-gray-700`
                    }
                >
                    {/* FontAwesomeIcon for icons */}
                    <FontAwesomeIcon icon={item.icon} className="text-xl" />
                    <span>{item.name}</span>
                </NavLink>
            ))}
        </div>
    )
}

export default UserNavbar