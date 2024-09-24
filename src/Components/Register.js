import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = (e) => {
    e.preventDefault();

    const userDetails = {
      email: emailOrPhone.includes('@') ? emailOrPhone : null,
      phoneNumber: !emailOrPhone.includes('@') ? emailOrPhone : null,
      password: password,
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    alert('Registration Successful!');

   
    navigate('/');

   
    setEmailOrPhone('');
    setPassword('');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/gradient-glassmorphing-background_23-2149446713.jpg')`,
      }}
    >
      <div className="bg-orange-500 bg-opacity-30 rounded-lg shadow-lg max-w-md w-full p-4 mt-15">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Create Your Account</h1>
        <p className="text-center text-red-900 mb-4 font-bold text-1xl">
          Join us today! Please fill in the details below to register.
        </p>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-bold mb-1">
              Email or Mobile Number
            </label>
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Enter your email or mobile number"
              className="w-full p-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-900 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
