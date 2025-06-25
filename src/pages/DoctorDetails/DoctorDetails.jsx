import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { bookAppointment } from '../../utils';
import { toast } from 'react-toastify';
import { useState } from 'react';


const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find(doctor => doctor.id === doctorId);

  const { image, name, education, specialty, experience, registration_number } = singleData;
  const [isBooked, setIsBooked] = useState(false)

  const handleAppointment = () => {
    bookAppointment(singleData);
    toast.success(`Appointment booked with Dr. ${name}`);
    setIsBooked(true)
  }
  return (
    <div>
      <div className='bg-gray-100 p-10 rounded-2xl my-6 text-center '>
        <h1 className='text-4xl font-bold mb-3'>Doctor’s Profile Details</h1>
        <p className='opacity-70'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
      </div>

      <div className='flex bg-gray-100 p-10 rounded-2xl gap-8 justify-between items-center'>
        <div>
          <img className='rounded-2xl w-80' src={image} alt="" />
        </div>
        <div>
          <h1 className='text-4xl font-bold'>{name}</h1>
          <h2 className='opacity-50  text-xl my-2'>{education}</h2>
          <h2 className='opacity-50  text-xl mb-6'>{specialty}</h2>
          <h2 className='opacity-50  text-xl my-2'>Working at </h2>
          <h2 className='text-xl font-bold mb-4'>TMSS Medical College & Rafatullah Community Hospital, Bogura</h2>
          <hr className='border-dashed my-2 opacity-40' />
          <h2 className='opacity-70 text-xl'>Reg No: {registration_number}</h2>
          <hr className='border-dashed my-2 opacity-40' />
          <div className='flex my-3'>
            <h3 className='font-bold mr-6'>Availability</h3>
            <button className='px-3 py-0.5 py- bg-amber-50 text-amber-500 rounded-full border border-amber-200'>Sunday</button>
            <button className='px-3 py-0.5 py- bg-amber-50 text-amber-500 rounded-full border border-amber-200 mx-4'>Monday</button>
            <button className='px-3 py-0.5 py- bg-amber-50 text-amber-500 rounded-full border border-amber-200'>Thursday</button>
          </div>
          <h3>
            <span className='font-bold pr-4'>Consultation Fee:   </span>
            <span className='font-bold text-blue-500'>Taka : 273</span>  <span className='opacity-70'>(incl. Vat)</span>
            <span className='text-blue-500'>Per consultation</span>
          </h3>
        </div>
      </div>

      <div className='bg-gray-100 p-10 rounded-2xl my-6 text-center '>
        <h1 className='text-4xl font-bold mb-3'>Book an Appointment</h1>

        <hr className='border-dashed my-2 opacity-40' />
        <div className='flex justify-between items-center my-3'>
          <h2 className='font-bold'>Availability</h2>
          <button
            className='px-3 py-0.5 py- bg-green-100 text-green-500 rounded-full border border-green-200'>Doctor Available Today
          </button>
        </div>
        <hr className='border-dashed my-2 opacity-40' />

        <button
          className='px-3 py-0.5 py- bg-amber-50 text-amber-500 rounded-full text-xs'><span className='border rounded-full px-1.5 mr-2'>!</span>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
        </button>
        <br />
        {/* <button onClick={handleAppointment} className='btn mt-8 w-full rounded-full bg-blue-500 text-white hover:bg-blue-700'>Book Appointment Now</button> */}
        <button
          onClick={handleAppointment}
          className={`btn mt-8 w-full rounded-full text-white ${isBooked ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-700'}`}
        >
          {isBooked ? 'Appointment Booked' : 'Book Appointment Now'}
        </button>

      </div>
    </div>
  );
};

export default DoctorDetails;