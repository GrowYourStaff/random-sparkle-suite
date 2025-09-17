import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KeyBenefits from './components/KeyBenefits';
import HowItWorksPreview from './components/HowItWorksPreview';
import CTASection from './components/CTASection';
import PricingPage from './components/PricingPage';
import HowItWorksPage from './components/HowItWorksPage';

const HomePage = () => (
  <>
    <Hero />
    <KeyBenefits />
    <HowItWorksPreview />
    <CTASection />
    
    {/* Placeholder sections for future development */}
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-gray-600">Coming soon - Our simple 4-step process</p>
      </div>
    </section>

    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
        <p className="text-gray-600">Coming soon - Real success stories from our clients</p>
      </div>
    </section>

    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Zenvve</h2>
        <p className="text-gray-600">Coming soon - Our story and team</p>
      </div>
    </section>

    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600">Coming soon - Get in touch with our team</p>
      </div>
    </section>

    <section id="get-started" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get Started</h2>
        <p className="text-blue-100 mb-8">Ready to transform your LinkedIn outreach?</p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold text-lg shadow-lg inline-block"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;