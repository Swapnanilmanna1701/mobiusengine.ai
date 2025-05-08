import React from 'react';
import { CheckCircle, Award, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Higher Success Rate',
    description: 'Our clients are 7x more likely to land interviews compared to traditional job search methods.'
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Our team includes former recruiters and HR specialists from top companies.'
  },
  {
    icon: Clock,
    title: 'Time Efficient',
    description: 'Save 20+ hours per week on job search activities with our automated solutions.'
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Each client receives customized attention and strategies tailored to their industry and career goals.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Us?</h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Results That Speak For Themselves</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">87%</p>
              <p className="text-gray-700">Interview rate within 2 weeks</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">92%</p>
              <p className="text-gray-700">Client satisfaction</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10x</p>
              <p className="text-gray-700">Faster job placement</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-700">Successful placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;