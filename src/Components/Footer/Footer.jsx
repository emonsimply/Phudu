import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {

  const links = <>
    <NavLink
      to='/'
      className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'opacity-80'}
    >
      <li>Home</li>
    </NavLink>

    <NavLink
      to='/myBookings'
      className={({ isActive }) => isActive ? 'text-blue-600 mx-8 border-b-2 border-blue-600' : 'opacity-80 mx-8'}
    >
      <li>My-Bookings</li>
    </NavLink>

    <NavLink
      to='/blogs'
      className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'opacity-80'}
    >
      <li>Blogs</li>
    </NavLink>

    <NavLink
      to='/hhh'
      className={({ isActive }) => isActive ? 'text-blue-600 ml-8 border-b-2 border-blue-600' : 'opacity-80 ml-8'}
    >
      <li>Contact Us</li>
    </NavLink>
  </>

  return (
    <div className='py-20 bg-gray-100'>
      <div className='flex justify-center items-center gap-3 mb-4'>
        <img className='w-10' src="/src/assets/icons8-plus-512.png" alt="" />
        <h1 className='text-2xl font-bold'>Phudu</h1>
      </div>
      <ul className='flex justify-center items-center'>
        {links}
      </ul>
      <hr className='my-8 w-2/3 mx-auto' />
      <div className='flex justify-center gap-5'>
        <a href="https://hikmah.net/@emonsimply" target='_blank'><img className='w-8' src="/src/assets/hikmah.png" alt="" /></a>
        <a href="https://www.facebook.com/foysalislamemon77" target='_blank'><img className='w-8' src="/src/assets/facebook.png" alt="" /></a>
        <a href="https://x.com/emonsimply" target='_blank'><img  className='w-8' src="/src/assets/twitter.png" alt="" /></a>
        <a href="https://www.instagram.com/emonsimply/" target='_blank'><img  className='w-8' src="/src/assets/social.png" alt="" /></a>
      </div>
    </div>
  );
};

export default Footer;