import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import LoanTypes from "./Components/LoanTypes";
import LoanDetail from "./Components/LoanDetail";
import Eligibility from "./Components/Eligibility";
import Calculator from "./Components/Calculator";
import Register from './Components/Register';
import Footer from './Components/Footer';
import Apply from './Components/Apply'; 


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div 
        className="min-h-screen bg-cover bg-center flex flex-col overflow-x-hidden" 
        style={{ 
          backgroundImage: "url('https://img.freepik.com/free-photo/calculator-money-notepad-keyboard-yellow-background-flat-lay_169016-24505.jpg')"
        }}
      >
        
        <nav className="flex justify-between items-center p-4 sm:p-3 bg-green-800 bg-opacity-80 w-full">
          <div>
            <Link to="/">
              <img 
                src="https://img.freepik.com/premium-vector/loan-vector-illustration_1186366-7470.jpg" 
                alt="logo" 
                className="w-9 h-9 sm:w-10 sm:h-10" 
              />
            </Link>
          </div>

          <button 
            className="text-white block sm:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>

        
         
          <div className={`sm:flex space-x-4 sm:space-x-6 ${isOpen ? "block" : "hidden"} sm:block`}>
          <Link to="/" className="text-white text-base sm:text-lg hover:underline">
              Home
            </Link>
            <Link to="/loan-types" className="text-white text-base sm:text-lg hover:underline">
              Loan Types
            </Link>
            <Link to="/eligibility" className="text-white text-base sm:text-lg hover:underline">
              Eligibility
            </Link>
            <Link to="/calculator" className="text-white text-base sm:text-lg hover:underline">
              Calculator
            </Link>
            
            <Link to="/register" className="text-white text-base sm:text-lg hover:underline">
              Register
            </Link>
          </div>
        </nav>

        
        <div className="flex-grow container mx-auto px-4 sm:px-6 md:px-8  bg-opacity-60 w-full m-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loan-types" element={<LoanTypes />} />
            <Route path="/loan-types/:loanType" element={<LoanDetail />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/calculator" element={<Calculator />} />
           
            <Route path="/register" element={<Register />} />
            <Route path="/apply/:loanType" element={<Apply />} /> 
          </Routes>
        </div>

        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
