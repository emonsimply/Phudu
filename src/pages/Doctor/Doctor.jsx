import React from 'react';

const Doctor = ({ singleDoctor }) => {

  const { image, name, education, specialty, experience, registration_number } = singleDoctor;

  return (
    <div className='bg-gray-100 rounded-xl p-6 justify-center  flex flex-col'>
      <img className='rounded-xl' src={image} alt="" />
      <div className='flex my-3'>
        <p className='border-green-300 mr-2 border text-green-400 bg-emerald-50 py-1 px-4 gap-3 rounded-full flex'>Available</p>
        <p className='border-blue-300 border text-blue-500 bg-blue-50 py-1 px-4 gap-3 rounded-full flex'>{experience}</p>
      </div>
      <h1 className='font-bold text-2xl'>{name}</h1>
      <h4 className='opacity-70 my-2'>{education}</h4>
      <hr className='w-full border-dashed border-1 border-gray-300' />
      <h5 className='my-2 opacity-70'>Reg No: {registration_number}</h5>
      <button className="btn my-2 border-1 w-full border-blue-500 rounded-full font-bold text-blue-500">View Details</button>
    </div>
  );
};

export default Doctor;