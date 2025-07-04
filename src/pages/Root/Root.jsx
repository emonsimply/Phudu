import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className='mx-3 md:mx-24'>
        <Navbar></Navbar>
      </div>
      <div className='mx-3 md:mx-24 min-h-[calc(100vh-116px)]'>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;