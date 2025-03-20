import React, { useState } from 'react'
import AdminNav from '../component/adminnav/AdminNav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

import AddProduct from '../component/addpproduct/AddProduct'

const AdminHomepage = () => {

  const [addproduct, setaddproduct] = useState(false)

  return (
    <div className='w-full h-auto '>


      <div className='w-full grid grid-cols-1   '>

        <AdminNav />

      </div>


      <div className='w-full h-auto  mt-20 '>

        <div className="content grid sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2"  >

          <div className='text-center '>

            <div className=' border-black p-2' >
              <input type="text" name="search " id="searchbar" className='text-xl' />  <button>Search</button>
            </div>





          </div>

          <div >
            <button onClick={() => setaddproduct(true)} className='bg-green-500 p-2 rounded-md text-white'>
              Add Product <FontAwesomeIcon icon={faAdd} />
            </button>
          </div>

        </div>

        {
          addproduct ? <AddProduct /> : null
        }


      </div>




    </div>
  )
}

export default AdminHomepage