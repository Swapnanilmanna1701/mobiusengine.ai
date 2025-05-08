import React from 'react';
import { Play, Linkedin } from 'lucide-react';

const testimonials = [
  {
    name: 'Holly',
    title: 'Senior Executive',
    achievement: 'Got over 10 job interviews and an offer she accepted',
    videoId: 'example1',
    thumbnailUrl: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Joshua',
    title: 'Senior Software Engineer',
    achievement: 'Accepted an offer',
    videoId: 'example2',
    thumbnailUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">What our clients have to say</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="flex flex-col items-center">
              <p className="text-center text-gray-700 mb-4">
                {testimonial.name} is a {testimonial.title} who has {testimonial.achievement}
              </p>
              
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src={testimonial.thumbnailUrl} 
                  alt={`${testimonial.name}'s testimonial`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-60">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-700 mb-4">More customer testimonials at our</p>
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
        
        <div className="mt-16 flex justify-center">
          <div className="bg-blue-100 rounded-lg p-6 max-w-2xl">
            <div className="flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Award badge"
                className="h-20 mr-4"
              />
              <div>
                <p className="text-blue-800 font-medium">MobiusEngine is the proud 2023-2024 Gold Partner of UCLA Bruin Entrepreneurs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;