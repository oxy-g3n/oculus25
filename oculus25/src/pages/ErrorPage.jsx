import React from 'react';

const ErrorPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4 text-center">
      <p className="bg-gray-300">Oops! Something went wrong...</p>
      <p className="bg-gray-300">We couldn't find the page you were looking for.</p>
      <p className="bg-gray-300">Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
