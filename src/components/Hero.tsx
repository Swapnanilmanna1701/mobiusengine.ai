import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Land job interviews
              <br />
              <span className="text-blue-600">10x faster</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We leverage AI to optimize your job applications, ensuring you stand out to employers and secure more interviews.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">2024/2025 HIRING TRENDS</h3>
                <p className="text-gray-600 mb-4">Discover the latest job market insights and how AI is revolutionizing the hiring process.</p>
                <img 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Hiring trends report"
                  className="w-full rounded-md mb-4"
                />
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 font-medium text-sm">
                    Download our free E-Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;