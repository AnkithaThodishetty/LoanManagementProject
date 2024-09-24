import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen sm:p-8 p-4 bg-gradient-to-b from-green-900 to-green-400">
      
      <section className="relative py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Welcome to Loan Services</h1>
          <p className="text-base sm:text-lg text-white mb-4">
            Unlock your financial dreams with our flexible loan plans designed for all types of borrowers.
          </p>
          <p className="text-base sm:text-lg text-white mb-8">
            Enjoy hassle-free processing, transparent interest rates, and customized repayment options.
          </p>

          <div className="relative bg-pink m-6 rounded-tl-full rounded-tr-full p-6 overflow-hidden">
            <img
              src="https://th.bing.com/th/id/R.72c00bd493c54384967a36d236c5960f?rik=XFZHbckqnGIaxw&riu=http%3a%2f%2fairehomeloans.com.au%2fwp-content%2fuploads%2f2020%2f07%2fHappy-family-in-their-new-home.jpg&ehk=PsIGWOwiCpsjLy9KvLwCIFx8cd%2bWqBo0CHUy3rZwa2c%3d&risl=&pid=ImgRaw&r=0"
              alt="Happy Family"
              className="w-50 h-50 object-cover rounded-md shadow-s"
            />
            <div className="absolute inset-0 bg-green-900 opacity-5 rounded-tl-full rounded-tr-full"></div>
          </div>

          <Link to="/loan-types" className="mt-6 bg-white text-green-900 py-3 px-8 rounded-full text-base sm:text-lg hover:bg-green-700 mt-9">
            Explore Loan Types
          </Link>
        </div>
      </section>

      
      <section className="py-16 px-4 sm:px-6 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-green-900">About Our Loan Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                We have been providing trusted loan services for over 10 years. Whether you're looking for home loans, car loans, or personal loans, our dedicated team is here to help.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Our services come with fast approval times, low interest rates, and the best customer support in the industry.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://image.freepik.com/free-vector/loans-isometric-composition-with-elements-money-customer-support-agent-top-smartphone_1284-28134.jpg"
                alt="About Us"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 px-4 sm:px-6 text-center bg-gray-200 rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-green-900">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2">
            <img
              src="https://th.bing.com/th/id/R.82481fc4809d24ad08b21ef3553ba87c?rik=2zPPMbSkWHEU5A&riu=http%3a%2f%2fwww.multivisionfinancial.com%2fwp%2fwp-content%2fuploads%2f2014%2f03%2ffast_loan_process.jpg&ehk=cEhUK0H1gzRhujp00Gj6jNEQy2wXvZEtbyCdmQU18AQ%3d&risl=&pid=ImgRaw&r=0"
              alt="Fast Processing"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-900">Fast Processing</h3>
            <p>Quick loan approval within minutes. Simple and transparent process.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2">
            <img
              src="https://image.slidesharecdn.com/choosingarightpersonalloanemioption-170210053341/95/choosing-a-right-personal-loan-emi-option-4-638.jpg?cb=1486704879"
              alt="Flexible EMI Options"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-900">Flexible EMI Options</h3>
            <p>Low-interest rates with custom terms that suit your financial situation.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2">
            <img
              src="https://www.acrylicit.co.uk/wp-content/uploads/2021/09/24-7-IT-Support.png"
              alt="24/7 Support"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-900">24/7 Customer Support</h3>
            <p>We are available around the clock to assist you.</p>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-pink-200">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-12">Loan Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Add smooth transition for these cards as well */}
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4">Low Interest Rates</h3>
              <p>Get the most competitive interest rates on your loans. Pay less in interest and save more money over time.</p>
            </div>
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4">Flexible Tenure</h3>
              <p>Choose a repayment period that suits your financial capability. Enjoy flexible tenures ranging from 1 to 30 years.</p>
            </div>
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4">Zero Hidden Charges</h3>
              <p>No surprise fees or hidden charges. We ensure complete transparency in our loan process.</p>
            </div>
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4">Fast Approval</h3>
              <p>Get quick and easy approval on your loan applications without any lengthy paperwork or delays.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1">
              <p className="mb-4 text-gray-800">"Best loan service I've ever used. The process was simple and straightforward."</p>
              <h4 className="text-lg sm:text-xl font-bold text-green-900">John Doe</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1">
              <p className="mb-4 text-gray-800">"Amazing customer support. They were available 24/7 to answer all my queries."</p>
              <h4 className="text-lg sm:text-xl font-bold text-green-900">Jane Smith</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1">
              <p className="mb-4 text-gray-800">"Low-interest rates and fast approval! Couldn't ask for more."</p>
              <h4 className="text-lg sm:text-xl font-bold text-green-900">Michael Johnson</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Apply for a Loan?</h2>
          <p className="text-base sm:text-lg mb-8">Get the best loan deals tailored just for you.</p>
          <Link to="/register" className="bg-white text-green-900 py-3 px-10 rounded-full text-base sm:text-lg font-bold hover:bg-green-700">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
