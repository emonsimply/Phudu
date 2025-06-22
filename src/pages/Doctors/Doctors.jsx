import React, { Suspense, useEffect, useState } from 'react';
import './Loader.css';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([])

  return (
    <div>
       <div className='text-center mx-auto max-w-220'>
        <h1 className='text-4xl font-bold max-w-200 pb-3'>Our Best Doctors</h1>
        <p className='opacity-80'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
      </div>
      <Suspense fallback={<div className="loader"></div>}>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            data.map((singleDoctor) => <Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>)
          }
        </div>
      </Suspense>
    </div>
  );
};

export default Doctors;