import React from 'react';
import { Play } from 'lucide-react';

const AdvancedFeature = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Mobius Advanced - Custom Resume for Every Job
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We use our own proprietary AI model to customize each job application
          <span className="block text-sm text-gray-500 mt-2">*Currently only available to our advanced customers</span>
        </p>
        
        <div className="relative max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Resume customization preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group hover:bg-opacity-40 transition-all duration-300">
            <button className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 text-white fill-current ml-1" />
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">AI-Powered Optimization</h3>
              <p className="text-gray-600">Our proprietary AI analyzes job descriptions and optimizes your resume to improve match rates with ATS systems.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Time Savings</h3>
              <p className="text-gray-600">We handle the tedious parts of job hunting, saving you hours of repetitive application work.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Our team of career professionals provides personalized advice to improve your job search strategy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeature;