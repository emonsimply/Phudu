import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          <img className='w-10' src="/src/assets/icons8-plus-512.png" alt="" />
          <a className="btn btn-ghost font-bold text-xl">Phudu</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-full bg-blue-500 text-white">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;