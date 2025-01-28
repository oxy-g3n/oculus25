import React from "react";

const ContactUsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-2 text-gray-600">Reach out to us through the details below.</p>
        <div className="mt-4 space-y-2 text-gray-700">
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Instagram:</strong> @example</p>
          <p><strong>Address:</strong> 123 Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
