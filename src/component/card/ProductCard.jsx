import { fa4, faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import axios from 'axios'




const ProductCard = () => {

    useEffect(() => {

        const fetchData = async () => {
            // const res = await axios.get('http://localhost:8080/getproduct')
            // console.log(res.data)
        }

        fetchData()

    }, [])


    const handledelete = async () => {
        const res = await axios.post('http://localhost:8080/deleteproduct', {  })
    }


    const handleEdit = () => {
        const res = axios.patch('http://localhost:8080/editproduct', {  })
    }

  return (
      <div className='max-w-sm grid  bg-slate-100 shadow-md rounded-lg overflow-hidden'>
          
          
          <div className='p-1 text-center'>
              <img src='' alt='' className='w-full m-2 object-contain '/>
         </div>
          
          <div className='p-2 text-center'>
              
                <h3 className='text-lg font-semibold mb-2'>Product Name</h3>
              
          </div>

          <div className='p-2 text-center'>
              <h3 className='text-gray-600 mb-4'>
                  price {
                      
                  }
              </h3>
          </div>
          <div className='grid grid-cols-2 '>
            
              <div className='text-center'>
                  <button onclick={handleEdit}>
                      <FontAwesomeIcon icon={faEdit} />
                  </button>
              </div>  

              <div className='text-center'>
                  <button onclick={handledelete}>
                      <FontAwesomeIcon icon={faTrashCan} /> 
                  </button>
              </div>
          </div>

    </div>
  )
}

    export default ProductCard;