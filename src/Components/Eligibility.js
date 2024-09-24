import React from 'react';

const Eligibility = () => {
  return (
    <div className="bg-cover bg-center h-center h-full w-90 " style={{ backgroundImage: 'url(https://www.herofincorp.com/public/admin_assets/upload/blog/603e2859b19be_1366x414-68.webp)' }}>
      <div className="bg-opacity-90 p-6 rounded-lg shadow- max-w-4xl mx-auto mt-0">
        <h1 className="text-4xl font-bold text-green-900 mb-6 text-center">Check Your Eligibility</h1>
        <p className="text-lg text-gray-900 mb-8 text-center font-bold text-4xl">
          Find out if you qualify for our loan services based on your credit score and financial history.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-green-800">Credit Score</h2>
            <p className="mt-2 text-gray-600">A minimum credit score of 650 is required to apply for a loan.</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Check your credit score regularly.</li>
              <li>Improve your score for better rates.</li>
            </ul>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-green-800">Income Requirements</h2>
            <p className="mt-2 text-gray-600">Your monthly income should be sufficient to cover loan payments.</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Stable employment history is preferred.</li>
              <li>Proof of income is required.</li>
            </ul>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-green-800">Debt-to-Income Ratio</h2>
            <p className="mt-2 text-gray-600">A debt-to-income ratio of 40% or lower is generally accepted.</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Calculate your DTI before applying.</li>
              <li>Reduce debts for better eligibility.</li>
            </ul>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <h2 className="text-xl font-semibold text-green-800">Documentation Required</h2>
            <p className="mt-2 text-gray-600">Ensure you have the following documents ready:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Government-issued ID</li>
              <li>Proof of income (e.g., pay stubs)</li>
              <li>Bank statements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
