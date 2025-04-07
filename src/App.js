import './index.css';
import './App.css';
import AdminHomepage from './pages/AdminHomepage';
import AllMobiles from './pages/Allmobiles';
import Home from './pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AdminLogin from './pages/adminpages/login/AdminLogin';

import Signup from './pages/adminpages/signup/Signup';
import AuthGuard from './component/authguard/Authguard';
import CustOrdres from './pages/adminpages/orders/CustOrdres';
import Mobiles from './pages/adminpages/mobiles/Mobiles';
import ErrorPage from './component/errorpage/ErrorPage';
import Accessory from './pages/Accessory';
import SmartWatches from './pages/SmartWatches';
import SuccessSignup from './pages/success/SuccessSignup';
import Headphone from './pages/adminpages/headphone/Headphone';
import AllAccessories from './pages/adminpages/accessories/AllAccessories';
import Smartwatch from './pages/adminpages/smartwatches/Smartwatch'
import ContactUs from './pages/contact-us/ContactUs';
import UserLogin from './pages/userlogin/UserLogin';
import UserSignup from './pages/userlogin/UserSignup';
import UserAuthgaurad from './component/authguard/UserAuthgaurad';
import UserProfile from './pages/userpages/UserProfile';
import UserDashboard from './pages/userpages/UserDashboard';
import UserNavbar from './component/usernav/UserNavbar';
function App() {





  return (
    <div className="App">
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='all-mobiles' element={<AllMobiles />} />
        <Route path='accessory' element={<Accessory />} />
        <Route path='/sign/up/success' element={<SuccessSignup />} />
        <Route path="smart-watches" element={<SmartWatches />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />






        <Route path='/user-dashboard' element={<UserDashboard />} >




          <Route path='mobiles' />
          <Route path='laptops' />
          <Route path='smartwatches' />
          <Route path='electronics' />
          <Route path='profile' element={<UserProfile />} />


        </Route>



        <Route path='/admin/santu' element={<AdminLogin />} />
        <Route path='/admin/santu/signup' element={<Signup />} />
        <Route element={<AuthGuard />}>

          <Route path="/admin/santu/home/admin" element={<AdminHomepage />} />
          <Route path="/admin/santu/home/mobiles" element={<Mobiles />} />
          <Route path="/admin/santu/home/head-phones" element={<Headphone />} />
          <Route path="/admin/santu/home/accessories" element={<AllAccessories />} />
          <Route path="/admin/santu/home/smartwatches" element={<Smartwatch />} />


          <Route path="admin/santu/home/cust/orders" element={<CustOrdres />} />



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
