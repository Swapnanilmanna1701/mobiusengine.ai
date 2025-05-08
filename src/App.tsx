import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import AdvancedFeature from './components/AdvancedFeature';
import WhyChooseUs from './components/WhyChooseUs';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Process />
      <AboutUs />
      <Testimonials />
      <AdvancedFeature />
      <WhyChooseUs />
      <PricingPlans />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;