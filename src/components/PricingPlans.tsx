import React, { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: {
      monthly: '$49',
      weekly: '$15'
    },
    suffix: '/wk',
    description: 'Perfect for job seekers just starting their search',
    features: [
      'Search and Curation across 1m+ jobs, every 72 hours',
      '1x Resume audit report',
      'Up to 10 approved job apps/week - human based, no bots',
      'Up to 5 search criteria & 3 job titles included'
    ],
    cta: 'Sign up now'
  },
  {
    name: 'Plus',
    price: {
      monthly: '$89',
      weekly: '$25'
    },
    suffix: '/wk',
    description: 'For serious job seekers wanting more options',
    features: [
      'Search and Curation across 1m+ jobs, every 60 hours',
      '1x Resume audit report',
      'Up to 15 approved job apps/week - human based',
      'Dedicated application analyst',
      'Up to 8 search criteria & 4 job titles included',
      'Additional apps at $12/application'
    ],
    cta: 'Sign up now',
    isPopular: true
  },
  {
    name: 'Advanced',
    price: {
      monthly: '$129',
      weekly: '$35'
    },
    suffix: '/wk',
    description: 'Comprehensive solution for dedicated professionals',
    features: [
      'Search and Curation across 1m+ jobs, every 48 hours',
      '1x Resume audit report',
      'Up to 20 approved job apps/week - human based, no bots, company websites only',
      'Additional apps at $15/application',
      'Dedicated application analyst',
      'Up to 10 search criteria & 5 job titles included',
      'AI Resume Customization'
    ],
    cta: 'Sign up now',
    isPromoted: true,
    promotionText: 'May Promo'
  }
];

const PricingPlans = () => {
  const [billingPeriod, setBillingPeriod] = useState('weekly');

  return (
    <section id="plans" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Job Application Service Plans</h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Choose the plan that fits your job search needs and accelerate your career journey.
        </p>
        
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1 shadow-md">
            <div className="flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  billingPeriod === 'weekly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setBillingPeriod('weekly')}
              >
                Weekly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  billingPeriod === 'monthly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                plan.isPopular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {(plan.isPopular || plan.isPromoted) && (
                <div className={`py-2 px-4 text-center text-white font-medium ${plan.isPromoted ? 'bg-blue-600' : 'bg-green-600'}`}>
                  {plan.isPromoted ? plan.promotionText : 'Most Popular'}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">
                    {billingPeriod === 'monthly' ? plan.price.monthly : plan.price.weekly}
                  </span>
                  <span className="text-gray-600">{plan.suffix}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                    plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution? Contact us for enterprise plans.</p>
          <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;