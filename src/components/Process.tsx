import React from 'react';
import { CheckCircle, Search, FileText, Calendar } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Submit Intake Form',
    description: 'Fill out a simple questionnaire about your skills and job preferences.',
    icon: FileText,
  },
  {
    number: 2,
    title: 'We do the search and curation for list of jobs',
    description: 'Our AI engine scans thousands of openings to find the best matches for your profile.',
    icon: Search,
  },
  {
    number: 3,
    title: 'You approve, we do the tedious part (applying)',
    description: 'Review our suggestions and let us handle the application process for you.',
    icon: CheckCircle,
  },
  {
    number: 4,
    title: 'You get the interviews',
    description: 'Prepare for your interviews while we continue optimizing your applications.',
    icon: Calendar,
  },
];

const Process = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-2/3 pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Proven Process</h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start group">
                  <div className="flex-shrink-0 mr-6">
                    <div className="bg-black text-white rounded-lg w-16 h-16 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <span className="text-xl font-bold">Step {step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
                Download our free E-Book
              </button>
            </div>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-0">
            <div className="sticky top-32">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Job search process"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;