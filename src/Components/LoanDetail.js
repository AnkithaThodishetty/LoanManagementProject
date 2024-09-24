import React from 'react';
import { useParams, Link } from 'react-router-dom';

const loanDetails = {
  'personal-loan': {
    title: 'Personal Loan',
    description: 'Personal loans up to ₹10,00,000 with flexible EMI options. Perfect for emergencies, weddings, and more.',
    imgUrl: 'https://www.axisbank.com/images/default-source/progress-with-us_new/ask-before-getting-personal-loan.jpg',
    benefits: [
      'Flexible repayment options',
      'Quick approval within hours',
      'Minimal documentation required',
      'Competitive interest rates',
    ],
  },
  'home-loan': {
    title: 'Home Loan',
    description: 'Home loans with low-interest rates, easy approvals, and flexible terms. Achieve your dream of homeownership.',
    imgUrl: 'https://www.loanfasttrack.com/blog/wp-content/uploads/2021/04/housing-loan-1.jpg',
    benefits: [
      'Low-interest rates starting at 6%',
      'Long-term repayment tenure up to 30 years',
      'No hidden charges or fees',
      'Easy and quick processing',
    ],
  },
  'car-loan': {
    title: 'Car Loan',
    description: 'Get a car loan with affordable interest rates. Buy your dream car with simple, quick approvals.',
    imgUrl: 'https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/images/what-is-vehicle-loan-and-its-different-types.jpg',
    benefits: [
      'Up to 90% financing for your car',
      'Low EMI options available',
      'Flexible repayment tenure',
      'Quick and hassle-free approvals'
    ]
  },
  'education-loan': {
    title: 'Education Loan',
    description: 'Education loans with competitive interest rates. Invest in your education without financial worries.',
    imgUrl: 'https://formalnews.in/wp-content/uploads/2020/09/Education-Loan.jpg',
    benefits: [
      'Low-interest rates for students',
      'Flexible repayment period after graduation',
      'Covers tuition, books, and living expenses',
      'No collateral required for some courses'
    ]
  },
  'business-loan': {
    title: 'Business Loan',
    description: 'Finance your business with flexible loans, low-interest rates, and easy approvals.',
    imgUrl: 'https://mediumpost.com/wp-content/uploads/2019/06/Business-Loan-1-681x329.jpg',
    benefits: [
      'Flexible loan amounts',
      'Low-interest rates',
      'No collateral required for small businesses',
      'Fast approval process'
    ]
  },
  'gold-loan': {
    title: 'Gold Loan',
    description: 'Get quick cash by pledging your gold. Easy process and attractive interest rates.',
    imgUrl: 'https://hlpgloans.com/storage/2024/04/gold-loan.jpg',
    benefits: [
      'Low-interest rates',
      'Quick disbursement',
      'Minimal paperwork',
      'Flexible repayment options'
    ]
  },
  'two-wheeler-loan': {
    title: 'Two-Wheeler Loan',
    description: 'Get your dream bike with our easy two-wheeler loan options. Quick approvals and affordable EMIs.',
    imgUrl: 'https://www.indusind.com/iblogs/wp-content/uploads/Applying-For-a-Two-Wheeler-Loan-IndusInd-Bank.jpg',
    benefits: [
      'Up to 100% financing',
      'Low-interest rates',
      'Fast approval process',
      'Flexible repayment terms'
    ]
  },
  'agriculture-loan': {
    title: 'Agriculture Loan',
    description: 'Loans for farmers with low-interest rates and flexible terms. Support your farming needs.',
    imgUrl: 'https://icoda.io/wp-content/uploads/2022/02/what-is-yield-farming-crypto.png',
    benefits: [
      'Low-interest rates for farmers',
      'Flexible repayment terms',
      'Covers equipment, seeds, and land purchase',
      'Quick and easy approvals'
    ]
  },
  
};

const LoanDetail = () => {
  const { loanType } = useParams();
  const loan = loanDetails[loanType];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-red-900 text-white py-4 px-3">
      {loanType ? (
        loan ? (
          <section className="py-12 px-6 max-w-5xl mx-auto">
            <h3 className="text-5xl font-bold mb-8 text-center">{loan.title}</h3>
            <div className="relative w-90 h-85 mb-6 overflow-hidden rounded-lg shadow-lg">
              <img src={loan.imgUrl} alt={loan.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out" />
            </div>
            <div className="bg-gray-850 p-8 shadow-xl rounded-lg text-center">
              <p className="text-xl mb-6">{loan.description}</p>
              <ul className="list-disc text-left mb-6 space-y-2">
                {loan.benefits.map((benefit, index) => (
                  <li key={index} className="ml-6">{benefit}</li>
                ))}
              </ul>
              <Link
                to={`/apply/${loanType}`}
                className="inline-block mt-8 bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-8 rounded-md shadow hover:from-green-600 hover:to-green-800 transition-all"
              >
                Apply Now
              </Link>
            </div>
          </section>
        ) : (
          <div className="text-center py-12 text-red-400 text-xl">Loan details not found!</div>
        )
      ) : (
        <section className="py-12 px-6 max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">Explore Our Loan Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(loanDetails).map(([key, loan]) => (
              <div key={key} className="bg-gray-850 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg shadow-md">
                  <img
                    src={loan.imgUrl}
                    alt={loan.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{loan.title}</h3>
                <p className="mb-6">{loan.description}</p>
                <Link
                  to={`/loan/${key}`}
                  className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-md shadow hover:from-blue-500 hover:to-blue-700 transition-all"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default LoanDetail;
