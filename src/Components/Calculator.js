import React, { useState } from "react";

const Calculator = () => {
  const [loanType, setLoanType] = useState("Personal Loan");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const loanOptions = [
    "Personal Loan",
    "Home Loan",
    "Car Loan",
    "Education Loan",
    "Business Loan",
    "Gold Loan",
    "Two-Wheeler Loan",
    
    "Agriculture Loan",
    
  ];

  const loanImages = {
    "Personal Loan": "https://th.bing.com/th/id/OIP.1MI6Db3vZcFEnT0_9lZ-AAAAAA?rs=1&pid=ImgDetMain",
    "Home Loan": "https://catalog.wlimg.com/3/73552/small-images/property-loan-consultant-11081.jpg",
    "Car Loan": "https://s3-eu-west-1.amazonaws.com/sandhurst-templatewebsites/1a5b3e4b-b587-4903-9ae1-af4cb480ae5a.jpg",
    "Education Loan": "https://www.wemakescholars.com/images/background-design/education-loan-emi-cal.png",
    "Business Loan": "https://www.calculator.io/business-loan-calculator/assets/images/illustration-og.png",
    "Gold Loan": "https://th.bing.com/th/id/OIP.AeB7jeLNrFqr-XI9FGYYSgHaE7?w=1536&h=1023&rs=1&pid=ImgDetMain",
    "Two-Wheeler Loan": "https://miro.medium.com/v2/resize:fit:480/1*d3_a4RfjmYKkfOqW-zQTnQ.jpeg",
    "Agriculture Loan": "https://th.bing.com/th/id/OIP.1knM8Xu9h4Qs_F-wAdFgAwHaEU?w=1200&h=700&rs=1&pid=ImgDetMain",
    "Mortgage Loan": "https://thumbs.dreamstime.com/z/concept-mortgage-loan-calculator-265485267.jpg",
  };

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseInt(years) * 12;
    const x = Math.pow(1 + interest, numberOfPayments);
    const monthly = (principal * x * interest) / (x - 1);
    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-pink-600 flex flex-col items-center justify-center py-12">
      <div className="bg-blue  rounded-lg shadow-lg w-full max-w-4xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div className="w-full h-full mb-8 md:mb-0">
          <img
            src={loanImages[loanType]}
            alt="Loan Illustration"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

       
        <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-300 mb-6">Loan Calculator</h1>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Loan Type</label>
            <select
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {loanOptions.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Loan Amount (₹)"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Interest Rate (%)"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Loan Term (Years)"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <button
              onClick={calculateLoan}
              className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
            >
              Calculate Payment
            </button>

            {monthlyPayment && (
              <p className="text-2xl font-bold text-pink-900 mt-6">
                Estimated Monthly Payment: <span className="text-blue-900">₹ {monthlyPayment}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
