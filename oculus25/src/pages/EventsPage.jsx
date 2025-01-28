import React from 'react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center space-y-4">
      <p className="bg-gray-300">Placeholder</p>
      <Link to="/event-details" className="text-blue-500 hover:underline">
        Go to Event Details
      </Link>
    </div>
  );
};

export default EventsPage;
