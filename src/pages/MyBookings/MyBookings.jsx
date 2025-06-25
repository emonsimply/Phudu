import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getAppointment, removeBook } from '../../utils';
import BookingCard from '../BookingCard/BookingCard';
import Chart from './Chart';

const MyBookings = () => {
  const [displayDoctor, setDisplayDoctor] = useState([]);

  useEffect(() => {
    const savedBooking = getAppointment();
    setDisplayDoctor(savedBooking);
  }, []);

  const handleDelete = id => {
    removeBook(id)
    setDisplayDoctor(getAppointment)
  }

  return (
    <div className='p-4'>
      {
        displayDoctor.length === 0 ? (
          <div className='p-10 rounded-2xl my-6 text-center'>
            <h1 className='text-4xl font-bold mb-8'>You Have not Booked any appointment yet</h1>
            <p className='opacity-70'>
              Our platform connects you with verified, experienced doctors across various specialties - all at your convenience.
            </p>
            <Link to='/'>
              <button className='btn mt-8 rounded-full bg-blue-500 text-white hover:bg-blue-700'>
                Book an Appointment
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className='flex'>
              {
                displayDoctor.map((singleDoctor) => (
                  <Chart key={singleDoctor.id} singleDoctor={singleDoctor} handleDelete={handleDelete}></Chart>
                ))
              }
            </div>
            <div className='text-center mx-auto max-w-220 my-8'>
              <h1 className='text-4xl font-bold max-w-200 pb-3'>My Today Appointments</h1>
              <p className='opacity-80'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
              </p>
            </div>

            <div className='space-y-4'>
              {
                displayDoctor.map((singleDoctor) => (
                  <BookingCard key={singleDoctor.id} singleDoctor={singleDoctor} handleDelete={handleDelete} />
                ))
              }
            </div>
          </>
        )
      }
    </div>
  );
};

export default MyBookings;
