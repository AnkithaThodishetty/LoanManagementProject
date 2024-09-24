import React from 'react';
import { Link } from 'react-router-dom';

const PersonalLoan = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <img
        src="https://example.com/personal-loan-large.jpg"
        alt="Personal Loan"
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">Personal Loan</h1>
      <p className="mb-4">
        Get a personal loan of up to ₹10,00,000 with flexible repayment options. Ideal for personal emergencies, weddings, vacations, or any other personal need.
      </p>
      <ul className="list-disc ml-5 mb-4">
        <li>Loan Amount: ₹50,000 to ₹10,00,000</li>
        <li>Interest Rate: Starting from 10.5% per annum</li>
        <li>Tenure: 1 to 5 years</li>
        <li>Approval Time: Within 24 hours</li>
      </ul>
      <Link to="/apply" className="bg-green-800 text-white py-2 px-6 rounded-md inline-block hover:bg-green-700">
        Apply Now
      </Link>
    </div>
  );
};

export default PersonalLoan;
