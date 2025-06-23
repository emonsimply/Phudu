import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
        <h1 className="text-7xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;