import './index.css';
import './App.css';
import AdminHomepage from './pages/AdminHomepage';
import AllMobiles from './pages/Allmobiles';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AdminLogin from './pages/adminpages/login/AdminLogin';
import { useState } from 'react';
import Signup from './pages/adminpages/signup/Signup';
import AuthGuard from './component/authguard/Authguard';

import ErrorPage from './component/errorpage/ErrorPage';

function App() {
  const location = useLocation();

  const [user, setuser] = useState('user')




  return (
    <div className="App">
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='all-mobiles' element={<AllMobiles />} />
        <Route path='/accesories' />
        <Route exact path='/admin/santu' element={<AdminLogin />} />
        <Route exact path='/admin/santu/signup' element={<Signup />} />
        <Route element={<AuthGuard />}>
          <Route path="/admin/santu/home" element={<AdminHomepage />} />
          <Route path="/admin/santu/mobiles" element={<AllMobiles />} />
          <Route path="/admin/santu/head-phones" element={<AllMobiles />} />
          <Route path="/admin/santu/accessories" element={<AllMobiles />} />
          <Route path="/admin/santu/smart-watches" element={<AllMobiles />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>


    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
