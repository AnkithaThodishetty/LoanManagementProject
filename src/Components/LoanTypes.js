import React from 'react';
import { Link } from 'react-router-dom';

const loanData = [
  { type: 'Personal Loan', imgUrl: 'https://financialit.net/sites/default/files/personal-loans.jpg  ' },
  { type: 'Home Loan', imgUrl: 'https://www.sobha.com/blog/wp-content/uploads/2023/02/Home-loan-process-step-by-step-guide-get-home-loan-800x533.jpg' },
  { type: 'Car Loan', imgUrl: 'https://s3-eu-west-1.amazonaws.com/sandhurst-templatewebsites/1a5b3e4b-b587-4903-9ae1-af4cb480ae5a.jpg' },
  { type: 'Education Loan', imgUrl: 'https://www.wemakescholars.com/images/background-design/education-loan-emi-cal.png' },
  { type: 'Business Loan', imgUrl: 'https://www.calculator.io/business-loan-calculator/assets/images/illustration-og.png' },
  { type: 'Gold Loan', imgUrl: 'https://th.bing.com/th/id/OIP.AeB7jeLNrFqr-XI9FGYYSgHaE7?w=1536&h=1023&rs=1&pid=ImgDetMain' },
  { type: 'Two-Wheeler Loan', imgUrl: 'https://miro.medium.com/v2/resize:fit:480/1*d3_a4RfjmYKkfOqW-zQTnQ.jpeg' },
  { type: 'Agriculture Loan', imgUrl: 'https://th.bing.com/th/id/OIP.1knM8Xu9h4Qs_F-wAdFgAwHaEU?w=1200&h=700&rs=1&pid=ImgDetMain' },
  { type: 'Mortgage Loan', imgUrl: 'https://thumbs.dreamstime.com/z/concept-mortgage-loan-calculator-265485267.jpg' },
];

const LoanTypes = () => {
  return (
    <section className= "py-12 px-6 bg-gray-600">
      <h3 className="text-2xl font-bold mb-8 text-center">Explore Our Loan Options</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {loanData.map((loan, index) => (
          <div key={index} className="bg-white p-4 shadow rounded text-center">
            <img src={loan.imgUrl} alt={loan.type} className="mb-4 w-full h-48 object-cover rounded" />
            <h4 className="font-bold text-lg mb-2">{loan.type}</h4>
            <Link to={`/loan-types/${loan.type.toLowerCase().replace(/\s/g, '-')}`} className="text-green-800 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanTypes;
