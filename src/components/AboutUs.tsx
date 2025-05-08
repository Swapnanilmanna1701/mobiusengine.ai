import React from 'react';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ashwin',
    title: 'Founder',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.',
    vision: 'Ashwin\'s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.',
    linkedin: 'https://linkedin.com/in/ashwin'
  },
  {
    name: 'Nicole',
    title: 'Executive Coach',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Nicole is an Executive coach at Mobius specializing in resume builds and career advisory. With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.',
    linkedin: 'https://linkedin.com/in/nicole'
  }
];

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">About Us</h2>
        
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="md:w-1/3">
                <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                {member.vision && (
                  <p className="text-gray-700 font-medium mb-4">{member.vision}</p>
                )}
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  {member.name}'s LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Board of Advisors</h3>
          <a 
            href="https://linkedin.com/company/mobiusengine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn page
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;