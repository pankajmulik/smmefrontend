import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';
const UserAuthgaurad = ({childrens}) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check authentication status

  return isAuthenticated ? <Outlet /> : <Navigate to="/error" />;
}

export default UserAuthgaurad