import React from 'react';
import CountUp from 'react-countup';

const SuccessSection = () => {
  return (
    <div className='my-16'>
      <div className='text-center mx-auto max-w-220 my-6'>
        <h1 className='text-4xl font-bold max-w-200 pb-3'>We Provide Best Medical Services</h1>
        <p className='opacity-80'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='bg-gray-100 rounded-xl p-8 grid'>
          <img className='w-16' src="/src/assets/total-doctors.png" alt="" />
          <h1 className='text-5xl font-bold my-3'><CountUp start={0} end={199} duration={10} />+</h1>
          <h3 className='font-bold opacity-60'>Total Doctors</h3>
        </div>
        <div className='bg-gray-100 rounded-xl p-8'>
          <img className='w-16 mb-8' src="/src/assets/total-reviews.png" alt="" />
          <h1 className='text-5xl font-bold my-3'> <CountUp start={0} end={467} duration={10} />+</h1>
          <h3 className='font-bold opacity-60'>Total Reviews</h3>
        </div>
        <div className='bg-gray-100 rounded-xl p-8'>
          <img className='w-16' src="/src/assets/patients.png" alt="" />
          <h1 className='text-5xl font-bold my-3'><CountUp start={0} end={1900} duration={10} />+</h1>
          <h3 className='font-bold opacity-60'>Patients</h3>
        </div>
        <div className='bg-gray-100 rounded-xl p-8'>
          <img className='w-16' src="/src/assets/total-stuffs.png" alt="" />
          <h1 className='text-5xl font-bold my-3'><CountUp start={0} end={300} duration={10} />+</h1>
          <h3 className='font-bold opacity-60'>Total Stuffs</h3>
        </div>
        

      </div>
    </div>
  );
};

export default SuccessSection;