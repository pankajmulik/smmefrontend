import React from 'react'
import data from './usernavdata'
const UserNavbar = () => {
  return (
      <div className='grid grid-cols-1 sti'>
          {
              data.map((item) => {
                  return (
                      <div key={item.id} className='flex items-center gap-2 text-white text-xl font-semibold hover:bg-gray-700 p-2 rounded-lg cursor-pointer'>
                          <i className={item.icon}></i>
                          <a href={item.link}>{item.name}</a>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default UserNavbar