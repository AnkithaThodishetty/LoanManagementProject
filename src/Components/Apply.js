import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyLoan = () => {
  const navigate = useNavigate();
  const [loanDetails, setLoanDetails] = useState({
    name: '',
    amount: '',
    phoneNumber: '',
    email: '',
    loanType: '',
  });
  const [showModal, setShowModal] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails({
      ...loanDetails,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (loanDetails.phoneNumber.length !== 12 || !/^\d+$/.test(loanDetails.phoneNumber)) {
      alert('Phone number must be 10 digits long and contain only numbers.');
      return;
    }

    setShowModal(true); 
  };

 
  const redirectToHome = () => {
    setLoanDetails({
      name: '',
      amount: '',
      phoneNumber: '',
      email: '',
      loanType: '',
    });
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.zXZcey-FGlQgiXvK4m5dmgHaFj?w=1200&h=900&rs=1&pid=ImgDetMain)' }}>
      <div className="bg-gray-300 bg-opacity-50 p-2 rounded-lg shadow-lg w-96 mr-9 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-5 text-center">Apply for a Loan</h1>
        
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              value={loanDetails.name} 
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded transition duration-200 hover:border-blue-500 focus:border-blue-500" 
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
              Loan Amount (USD)
            </label>
            <input 
              id="amount" 
              name="amount" 
              type="number" 
              value={loanDetails.amount} 
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded transition duration-200 hover:border-blue-500 focus:border-blue-500" 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input 
              id="phoneNumber" 
              name="phoneNumber" 
              type="text" 
              value={loanDetails.phoneNumber} 
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded transition duration-200 hover:border-blue-500 focus:border-blue-500" 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              value={loanDetails.email} 
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded transition duration-200 hover:border-blue-500 focus:border-blue-500" 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="loanType">
              Loan Type
            </label>
            <select 
              id="loanType" 
              name="loanType" 
              value={loanDetails.loanType} 
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded transition duration-200 hover:border-blue-500 focus:border-blue-500" 
              required
            >
              <option value="">Select Loan Type</option>
              <option value="personal">Personal Loan</option>
              <option value="home">Home Loan</option>
              <option value="auto">Auto Loan</option>
              <option value="education">Education Loan</option>
            </select>
          </div>

          <button 
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full transition duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-4">Success!</h3>
            <p>Your loan application has been submitted successfully.</p>
            <button
              className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
              onClick={redirectToHome}
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyLoan;
