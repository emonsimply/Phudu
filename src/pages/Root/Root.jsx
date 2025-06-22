import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className='mx-3 md:mx-24'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;