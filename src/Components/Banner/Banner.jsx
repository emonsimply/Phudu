import React from 'react';

const Banner = () => {
  return (
    <div className='mt-6 mb-12 p-10 bg-linear-to-t from-gray-100 border-3 border-gray-100 rounded-2xl'>
      <div className='text-center mx-auto max-w-220'>
        <h1 className='text-4xl font-bold max-w-200 pb-3'>Dependable Care, Backed by Trusted Professionals.</h1>
        <p className='opacity-80'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
      </div>
      <div className='text-center py-6 flex justify-center items-center gap-3 max-w-200 mx-auto'>
        <input className='border py-1.5 px-3 w-full rounded-full border-gray-200 bg-gray-100' placeholder='Search any doctor...' type="search" name="" id="" />
        <button className="btn rounded-full bg-blue-500 text-white">Search Now</button>
      </div>
      <div className='md:flex items-center justify-center gap-6'>
        <img className='w-120 rounded-xl' src="https://i.ibb.co/67kZv7hp/doctor-image01.jpg" alt="" />
        <img className='w-120 rounded-xl' src="https://i.ibb.co/3Yv3cFJR/doctor-image02.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;