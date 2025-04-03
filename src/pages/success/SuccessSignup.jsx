import React from 'react'
import { useNavigate } from 'react-router-dom'
const SuccessSignup = () => {

    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/admin/santu')
    }, 3000);
  return (
      <div
      
      >
          
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: '#4CAF50',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="50px"
                    height="50px"
                >
                    <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                </svg>
            </div>
            <h2 style={{ color: 'red', marginTop: '20px' }}>Successfully Signed Up!</h2>
          </div>
          
         

          
    </div>
  )
}

export default SuccessSignup