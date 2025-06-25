import React from 'react';
import { toast } from 'react-toastify';


const BookingCard = ({ singleDoctor, handleDelete }) => {
  const { image, name, education, specialty, experience, registration_number, id } = singleDoctor;


  return (
    <div>

      <div className='bg-gray-100 rounded-2xl p-10'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <h2 className='opacity-70'>{education}</h2>
          </div>
          <div>
            <p className='opacity-70'>Appointment Fee : 950 Taka + Vat</p>
          </div>
        </div>
        <hr className='border-dashed opacity-20 border-1 my-4' />
        <button
          onClick={() => {
            handleDelete(id);
            toast.info(`Appointment with Dr. ${name} has been cancelled.`);
          }}
          className='btn my-2 border-1 w-full border-red-500 rounded-full font-bold text-red-500 hover:bg-red-500 hover:text-white'
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingCard;