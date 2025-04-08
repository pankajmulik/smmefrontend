import { faHome } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const UserProfile = () => {




  return (
    <div className='userprofile w-full h-auto grid ' >
      
      <nav className='grid grid-cols-2 w-full h-10 '>

        <div className='text-left '>
         <FontAwesomeIcon icon={faHome} className='text-2xl text-gray-500' />
        </div>

     
      </nav>

      

    </div>
  )
}

export default UserProfile