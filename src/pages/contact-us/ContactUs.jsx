import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContactUs = () => {
  return (
  
      <div className="w-full text-center h-auto grid grid-flow-row gap-2">
          
          <div className="grid font-extrabold  text-4xl mt-3">
              <h1 className='text-center  '>
                  Contact Us
              </h1>

          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 text-white">
              <div className="grid">
                  <h2>
                      Address
                  </h2>
                  <h3 className='text-center '>
                      Shri Mukundraj Mobiles
                  </h3>
                  <p>
                      Shalgaon-Raigaon Road,
                      <br />
                      opposite to Arman chicken Shop 
                      Shalgaon -415304
                  </p>
              </div>
              <div className="grid text-slate-900">
                  
                  <h2 className='text-2xl font-semibold text-gray-800 '>
                      Contact Information
                  </h2> 

                  <p className='text-slate-900'>
                      <h2>
                         Mobile 📱 - 9503491515
                      </h2>

                      <h2>
                          Email :
                      </h2>
                  </p>



              </div>
              <div className="grid"></div>

          </div>
          
       
          

      </div>
      
  )
}

export default ContactUs